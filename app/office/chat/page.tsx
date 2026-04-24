"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef, Suspense } from "react";

const agentNames: Record<string, string> = {
  lawyer: "Юрист",
  finance: "Финансист",
  consultant: "Консультант",
  researcher: "Ресёрчер",
};

const agentGreetings: Record<string, string> = {
  lawyer: "Здравствуйте. Я ваш юрист. Помогу с регистрацией ТОО, договорами, NDA, земельными сделками и регуляторикой. Что нужно?",
  finance: "Добрый день. Я финансист. Расчёт долей, IRR, финмодели, налоги, sweat equity — спрашивайте.",
  consultant: "Привет. Я консультант. Помогу с pitch для инвесторов, письмами на русском и английском, презентациями. Что готовим?",
  researcher: "Здравствуйте. Я ресёрчер. Найду операторов курортных парков, информацию по DMCC, аналитику рынков. Что ищем?",
};

type Message = { role: "user" | "assistant"; content: string };

function ChatContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const agentId = searchParams.get("agent") || "lawyer";
  const agentName = agentNames[agentId] || "Агент";
  const storageKey = `taldau_chat_${agentId}`;

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      tg.expand();
      tg.setHeaderColor("#0a0f1a");
      tg.setBackgroundColor("#0a0f1a");
      tg.BackButton.show();
      tg.BackButton.onClick(() => router.push("/office"));
    }
  }, [router]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setMessages(JSON.parse(saved));
      else setMessages([{ role: "assistant", content: agentGreetings[agentId] || "Чем помочь?" }]);
    } catch {
      setMessages([{ role: "assistant", content: agentGreetings[agentId] || "Чем помочь?" }]);
    }
  }, [agentId, storageKey]);

  useEffect(() => {
    if (messages.length > 0) {
      try { localStorage.setItem(storageKey, JSON.stringify(messages)); } catch {}
    }
  }, [messages, storageKey]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agent: agentId, messages: updated }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.content }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Ошибка соединения. Попробуйте ещё раз." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const clear = () => {
    localStorage.removeItem(storageKey);
    setMessages([{ role: "assistant", content: agentGreetings[agentId] || "Чем помочь?" }]);
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <button onClick={() => router.push("/office")} className="chat-back">&larr; Назад</button>
        <span className="chat-agent-name">{agentName}</span>
        <button onClick={clear} className="chat-clear">Очистить</button>
      </div>
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role === "user" ? "msg-user" : "msg-assistant"}`}>{m.content}</div>
        ))}
        {loading && <div className="msg-loading"><span className="animate-pulse">Думаю...</span></div>}
        <div ref={endRef} />
      </div>
      <div className="chat-input-area">
        <div className="chat-input-row">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Напишите сообщение..."
            rows={1}
            className="chat-textarea"
          />
          <button onClick={send} disabled={loading || !input.trim()} className="chat-send">&uarr;</button>
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div style={{minHeight:"100vh",background:"#0a0f1a",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.4)"}}>Загрузка...</div>}>
      <ChatContent />
    </Suspense>
  );
}
