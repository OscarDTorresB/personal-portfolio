"use server";

import { headers } from 'next/headers';
import { DATA } from '@/data/portfolio';

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, { count: number; expires: number }>();

export interface ConversationMessage {
  role: 'user' | 'model';
  text: string;
}

export async function callGemini(
  message: string,
  conversationHistory: ConversationMessage[] = []
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || "";

  if (!apiKey) {
    return "Something went wrong on my end — feel free to reach out at oscar@oscartorres.co instead.";
  }

  // Rate limiting
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (record) {
    if (now > record.expires) {
      rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
    } else {
      if (record.count >= MAX_REQUESTS) {
        return "You've sent a few messages — I'll be back in a minute. In the meantime, feel free to reach out at oscar@oscartorres.co.";
      }
      record.count++;
    }
  } else {
    rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
  }

  // Build conversation contents with history
  const contents = [
    ...conversationHistory.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    })),
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ];

  let delay = 1000;
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: DATA.digitalTwin.systemPrompt }],
            },
          }),
        }
      );

      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error('Empty response');
      return text;
    } catch (error) {
      if (i === 2) {
        return "Something went wrong on my end — feel free to reach out at oscar@oscartorres.co instead.";
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }

  return "Something went wrong on my end — feel free to reach out at oscar@oscartorres.co instead.";
}
