"use client";

import { useState, useRef, useEffect } from "react";
import { Send, RotateCcw } from "lucide-react";
import Image from "next/image";
import { DATA } from "@/data/portfolio";
import type { ConversationMessage } from "@/lib/gemini";
import ReactMarkdown from "react-markdown";

const AVATAR_URL =
  "https://media.licdn.com/dms/image/v2/D4E03AQGsZgUFFqL7Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725142645394?e=1777507200&v=beta&t=N4sIfRZ4XTtnaTuQT_kZaZlXN5yz4biCtu4IupFCzt8";

type MessageStatus = "ok" | "error" | "rate_limit";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  status?: MessageStatus;
  /** Original user text that triggered this assistant message, used for retry */
  retryText?: string;
}

function AssistantAvatar() {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return (
      <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
        OT
      </div>
    );
  }

  return (
    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-0.5">
      <Image
        src={AVATAR_URL}
        alt="Oscar Torres"
        width={28}
        height={28}
        className="w-full h-full object-cover"
        onError={() => setImgFailed(true)}
        unoptimized
      />
    </div>
  );
}

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const hasStarted = messages.length > 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Abort any in-flight request on unmount
  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  async function sendMessage(text: string, retryAssistantId?: string) {
    if (!text.trim() || isLoading) return;

    let assistantId: string;

    if (retryAssistantId) {
      // Retry: reset the existing assistant message to loading state
      assistantId = retryAssistantId;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, text: "", status: undefined }
            : m
        )
      );
    } else {
      // New conversation turn
      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        text: text.trim(),
      };
      assistantId = crypto.randomUUID();
      const assistantMessage: Message = {
        id: assistantId,
        role: "assistant",
        text: "",
        retryText: text.trim(),
      };
      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setInput("");
    }

    setIsLoading(true);

    // Build history: all messages up to (not including) the current assistant message
    const history: ConversationMessage[] = messages
      .filter((m) => m.id !== assistantId && m.status !== "error" && m.status !== "rate_limit")
      .map((m) => ({
        role: m.role === "user" ? "user" : "model",
        text: m.text,
      }));

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), history }),
        signal: controller.signal,
      });

      if (response.status === 429) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, text: "", status: "rate_limit" }
              : m
          )
        );
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, text: data.text, status: "ok" } : m
        )
      );
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;

      // Clear any partial streamed content and mark as error
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, text: "", status: "error" }
            : m
        )
      );
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
              {message.role === "assistant" && <AssistantAvatar />}
              <div
                className={`max-w-[80%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-accent text-accent-foreground"
                    : message.status === "error" || message.status === "rate_limit"
                    ? "bg-muted/50 text-muted-foreground border border-border/60"
                    : "bg-muted text-foreground"
                }`}
              >
                {message.role === "assistant" && !message.text && !message.status ? (
                  // Waiting for first streaming chunk
                  <div className="flex items-center gap-1 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
                  </div>
                ) : message.status === "rate_limit" ? (
                  <span>
                    You&apos;ve sent a few messages — I&apos;ll be back in a minute. In the meantime, feel free to reach out at{" "}
                    <a href="mailto:oscar@oscartorres.co" className="underline underline-offset-2">
                      oscar@oscartorres.co
                    </a>
                    .
                  </span>
                ) : message.status === "error" ? (
                  <span className="flex items-center gap-2">
                    <span>Something went wrong.</span>
                    {message.retryText && (
                      <button
                        onClick={() => sendMessage(message.retryText!, message.id)}
                        disabled={isLoading}
                        className="inline-flex items-center gap-1 text-xs text-accent hover:opacity-80 disabled:opacity-40 transition-opacity"
                        aria-label="Retry"
                      >
                        <RotateCcw size={12} />
                        Retry
                      </button>
                    )}
                  </span>
                ) : message.role === "assistant" ? (
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="my-1">{children}</p>,
                      ul: ({ children }) => <ul className="my-1 ml-4 list-disc space-y-0.5">{children}</ul>,
                      ol: ({ children }) => <ol className="my-1 ml-4 list-decimal space-y-0.5">{children}</ol>,
                      li: ({ children }) => <li>{children}</li>,
                      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                      h1: ({ children }) => <h1 className="text-base font-bold my-2">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-sm font-bold my-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-sm font-semibold my-1">{children}</h3>,
                      code: ({ children }) => <code className="text-accent bg-black/10 dark:bg-white/10 px-1 rounded text-xs font-mono">{children}</code>,
                      a: ({ href, children }) => <a href={href} className="text-accent underline underline-offset-2" target="_blank" rel="noopener noreferrer">{children}</a>,
                    }}
                  >
                    {message.text}
                  </ReactMarkdown>
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
