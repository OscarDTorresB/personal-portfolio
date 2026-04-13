"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send } from "lucide-react";
import { GoogleGenAI, Modality, type Session, type LiveServerMessage } from "@google/genai";
import { DATA } from "@/data/portfolio";
import { getLiveSessionToken } from "@/lib/gemini";

const LIVE_MODEL = "gemini-3.1-flash-live-preview";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sessionRef = useRef<Session | null>(null);
  const pendingIdRef = useRef<string | null>(null);
  const accumulatedRef = useRef<string>("");

  const hasStarted = messages.length > 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Cleanup Live API session on unmount
  useEffect(() => {
    return () => {
      sessionRef.current?.close();
    };
  }, []);

  const initSession = useCallback(async () => {
    if (sessionRef.current) return;

    const tokenName = await getLiveSessionToken();

    // Use ephemeral token as apiKey — API key never exposed to browser
    const ai = new GoogleGenAI({
      apiKey: tokenName,
      httpOptions: { apiVersion: "v1alpha" },
    });

    const session = await ai.live.connect({
      model: LIVE_MODEL,
      config: { responseModalities: [Modality.TEXT] },
      callbacks: {
        onopen: () => {},

        // Process ALL parts in each event (Live API best practice)
        onmessage: (response: LiveServerMessage) => {
          const content = response.serverContent;
          if (!content) return;

          if (content.modelTurn?.parts) {
            for (const part of content.modelTurn.parts) {
              if (part.text && pendingIdRef.current) {
                accumulatedRef.current += part.text;
                const id = pendingIdRef.current;
                const text = accumulatedRef.current;
                setMessages((prev) =>
                  prev.map((m) => (m.id === id ? { ...m, text } : m))
                );
              }
            }
          }

          if (content.turnComplete) {
            pendingIdRef.current = null;
            accumulatedRef.current = "";
            setIsLoading(false);
            inputRef.current?.focus();
          }

          // Clear audio playback queues on interruption (Live API best practice)
          if (content.interrupted) {
            pendingIdRef.current = null;
            accumulatedRef.current = "";
            setIsLoading(false);
          }
        },

        onerror: () => {
          const id = pendingIdRef.current;
          if (id) {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === id
                  ? {
                      ...m,
                      text: "Something went wrong on my end — feel free to reach out at oscar@oscartorres.co instead.",
                    }
                  : m
              )
            );
          }
          pendingIdRef.current = null;
          accumulatedRef.current = "";
          setIsLoading(false);
          sessionRef.current = null;
        },

        onclose: () => {
          sessionRef.current = null;
          // If response was in-flight when session closed, show error only if empty
          const id = pendingIdRef.current;
          if (id) {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === id && !m.text
                  ? { ...m, text: "Connection closed. Please try again." }
                  : m
              )
            );
            pendingIdRef.current = null;
            accumulatedRef.current = "";
            setIsLoading(false);
          }
        },
      },
    });

    sessionRef.current = session;
  }, []);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: text.trim(),
    };
    const assistantId = crypto.randomUUID();
    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      text: "",
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
    setIsLoading(true);

    pendingIdRef.current = assistantId;
    accumulatedRef.current = "";

    try {
      await initSession();
      // Send text via sendRealtimeInput (Live API best practice for all real-time input)
      sessionRef.current!.sendRealtimeInput({ text: text.trim() });
    } catch (error) {
      const errorText =
        error instanceof Error && error.message === "rate_limit"
          ? "You've sent a few messages — I'll be back in a minute. In the meantime, feel free to reach out at oscar@oscartorres.co."
          : "Something went wrong on my end — feel free to reach out at oscar@oscartorres.co instead.";

      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, text: errorText } : m))
      );
      pendingIdRef.current = null;
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="rounded-lg border border-border bg-background overflow-hidden">
      {/* Suggested questions */}
      {!hasStarted && (
        <div className="p-4 border-b border-border">
          <p className="text-xs text-muted-foreground mb-3 font-mono">
            Suggested questions
          </p>
          <div className="flex flex-wrap gap-2">
            {DATA.digitalTwin.suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => sendMessage(question)}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {hasStarted && (
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  OT
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-foreground text-background"
                    : "bg-muted text-foreground"
                }`}
              >
                {message.role === "assistant" && !message.text ? (
                  // Waiting for first streaming chunk
                  <div className="flex items-center gap-1 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
                  </div>
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input */}
      <div className={`p-4 ${hasStarted ? "border-t border-border" : ""}`}>
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about my experience..."
            disabled={isLoading}
            className="flex-1 bg-muted rounded-md px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
            aria-label="Message input"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            className="p-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
