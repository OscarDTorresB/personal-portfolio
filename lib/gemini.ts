"use server";

import { headers } from 'next/headers';

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

// Simple in-memory rate limiter (per instance)
const rateLimitMap = new Map<string, { count: number; expires: number }>();

export async function callGemini(prompt: string) {
    const apiKey = process.env.GEMINI_API_KEY || "";

    if (!apiKey) {
        throw new Error("Gemini API Key is not configured correctly on the server.");
    }

    // Rate Limiting Logic
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (record) {
        if (now > record.expires) {
            rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
        } else {
            if (record.count >= MAX_REQUESTS) {
                throw new Error("Rate limit exceeded. Please try again in a minute.");
            }
            record.count++;
        }
    } else {
        rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
    }

    const systemPrompt = `Act as the "Digital Twin" of Oscar Torres, a Senior Software Engineer and Tech Lead expert in React, Frontend Architecture, and Technical Leadership.
  Oscar's Context:
  - Worked at OPIS (Dow Jones) as Tech Lead, creating high-performance component libraries (Web Components, Plotly.js, ExcelJS) and WCAG design systems.
  - Worked at The Body Shop migrating legacy to React/TypeScript with 80% test coverage.
  - Consulted for a CDA increasing sales through automation and RBAC security.
  - Expert in: React, Next.js, TypeScript, TDD, Performance, Accessibility (WCAG).
  
  Your task is to respond to technical challenges posed by portfolio visitors. Offer concise, professional architectural recommendations (maximum 100 words) based on Oscar's approach: scalability, performance, and business value. Respond in the same language as the user's request (English or Spanish).`;

    let delay = 1000;
    for (let i = 0; i < 5; i++) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    systemInstruction: { parts: [{ text: systemPrompt }] }
                })
            });

            if (!response.ok) throw new Error('API Error');
            const result = await response.json();
            return result.candidates?.[0]?.content?.parts?.[0]?.text;
        } catch (error) {
            if (i === 4) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
        }
    }
}
