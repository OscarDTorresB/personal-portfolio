"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { callGemini, type ConversationMessage } from "@/lib/gemini";

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

  const hasStarted = messages.length > 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Build conversation history for the API (excluding the new user message we just added)
    const history: ConversationMessage[] = messages.map((m) => ({
      role: m.role === "user" ? "user" : "model",
      text: m.text,
    }));

    try {
      const response = await callGemini(text.trim(), history);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: "Something went wrong on my end — feel free to reach out at oscar@oscartorres.co instead.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
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
                {message.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                OT
              </div>
              <div className="bg-muted rounded-lg px-3.5 py-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input */}
      <div
        className={`p-4 ${hasStarted ? "border-t border-border" : ""}`}
      >
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
