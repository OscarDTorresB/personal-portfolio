import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";
import { DATA } from "@/data/portfolio";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;
const MODEL = "gemini-2.5-flash";

const rateLimitMap = new Map<string, { count: number; expires: number }>();

interface HistoryMessage {
  role: string;
  text: string;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY || "";

  if (!apiKey) {
    return new Response("Server error", { status: 500 });
  }

  // Rate limiting
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (record) {
    if (now > record.expires) {
      rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
    } else if (record.count >= MAX_REQUESTS) {
      return new Response("rate_limit", { status: 429 });
    } else {
      record.count++;
    }
  } else {
    rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
  }

  let message: string;
  let history: HistoryMessage[];
  try {
    ({ message, history } = await req.json());
  } catch (err) {
    console.error("[chat] failed to parse request body:", err);
    return new Response("Bad request", { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });

  const contents = [
    ...(history ?? []).map((m: HistoryMessage) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    })),
    { role: "user", parts: [{ text: message }] },
  ];

  const MAX_RETRIES = 3;
  let attempt = 0;

  while (attempt <= MAX_RETRIES) {
    try {
      const result = await ai.models.generateContent({
        model: MODEL,
        contents,
        config: {
          systemInstruction: DATA.digitalTwin.systemPrompt,
        },
      });

      return Response.json({ text: result.text ?? "" });
    } catch (err) {
      const status = (err as { status?: number })?.status;
      const isRetryable = status === 503 || status === 429;

      if (isRetryable && attempt < MAX_RETRIES) {
        const delay = 500 * 2 ** attempt; // 500ms, 1s, 2s
        console.warn(`[chat] attempt ${attempt + 1} failed with ${status}, retrying in ${delay}ms`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        attempt++;
        continue;
      }

      console.error(`[chat] generateContent failed after ${attempt + 1} attempt(s):`, err);
      return new Response("Server error", { status: 500 });
    }
  }

  return new Response("Server error", { status: 500 });
}
