"use server";

import { GoogleGenAI, Modality } from "@google/genai";
import { headers } from "next/headers";
import { DATA } from "@/data/portfolio";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, { count: number; expires: number }>();

const LIVE_MODEL = "gemini-3.1-flash-live-preview";

export async function getLiveSessionToken(): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || "";

  if (!apiKey) {
    throw new Error("missing_api_key");
  }

  // Rate limiting
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (record) {
    if (now > record.expires) {
      rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
    } else if (record.count >= MAX_REQUESTS) {
      throw new Error("rate_limit");
    } else {
      record.count++;
    }
  } else {
    rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
  }

  // v1alpha is required for ephemeral token generation
  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: { apiVersion: "v1alpha" },
  });

  const token = await ai.authTokens.create({
    config: {
      uses: 1,
      expireTime: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      liveConnectConstraints: {
        model: LIVE_MODEL,
        config: {
          responseModalities: [Modality.TEXT],
          systemInstruction: DATA.digitalTwin.systemPrompt,
        },
      },
    },
  });

  if (!token.name) throw new Error("no_token");
  return token.name;
}
