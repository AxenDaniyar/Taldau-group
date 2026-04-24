"use client";

import Link from "next/link";
import { useEffect } from "react";

const agents = [
  {
    id: "lawyer",
    name: "Юрист",
    description: "Регистрация ТОО, NDA, договоры, земельные сделки",
    icon: "M3 6h18M3 12h18M3 18h18",
  },
  {
    id: "finance",
    name: "Финансист",
    description: "Доли, IRR, финмодели, налоги, IFRS",
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  },
  {
    id: "consultant",
    name: "Консультант",
    description: "Pitch, письма RU/EN, презентации, переговоры",
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  },
  {
    id: "researcher",
    name: "Ресёрчер",
    description: "Поиск партнёров, DMCC, аналитика рынков",
    icon: "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z",
  },
];

export default function OfficePage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      tg.expand();
      tg.setHeaderColor("#0a0f1a");
      tg.setBackgroundColor("#0a0f1a");
    }
  }, []);

  return (
    <div className="office-page">
      <div className="office-header">
        <h1 className="office-title">
          <span className="office-title-gold">TALDAU</span>
          <span className="office-title-dim">OFFICE</span>
        </h1>
        <p className="office-subtitle">Ваш бэк-офис</p>
      </div>

      <div className="agents-grid">
        {agents.map((agent) => (
          <Link key={agent.id} href={`/office/chat?agent=${agent.id}`} className="agent-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="agent-icon">
              <path d={agent.icon} />
            </svg>
            <div>
              <div className="agent-name">{agent.name}</div>
              <div className="agent-desc">{agent.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
