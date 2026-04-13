import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";
import { DATA } from "@/data/portfolio";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;
const MODEL = "gemini-2.5-flash";

const rateLimitMap = new Map<string, { count: number; expires: number }>();

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

  const { message, history } = await req.json();

  const ai = new GoogleGenAI({ apiKey });

  const contents = [
    ...(history ?? []).map((m: { role: string; text: string }) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    })),
    { role: "user", parts: [{ text: message }] },
  ];

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const genStream = await ai.models.generateContentStream({
          model: MODEL,
          contents,
          config: {
            systemInstruction: DATA.digitalTwin.systemPrompt,
          },
        });

        for await (const chunk of genStream) {
          const text = chunk.text ?? "";
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch {
        controller.enqueue(
          encoder.encode(
            "Something went wrong on my end — feel free to reach out at oscar@oscartorres.co instead."
          )
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
