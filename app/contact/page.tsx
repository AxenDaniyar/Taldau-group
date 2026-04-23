"use client";

import { useState } from "react";

const projectOptions = [
  "Квартал Айманова — Алматы",
  "Боровое Парк — Туризм",
  "Дубай — Активы",
  "СЭЗ Алатау — Технопарк",
  "Все проекты",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="gold-line mb-6" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Инвесторам</h1>
        <p className="text-text-muted mb-12 max-w-xl">
          Оставьте заявку — мы свяжемся, ответим на вопросы и предоставим детальную документацию по интересующему проекту.
        </p>

        {submitted ? (
          <div className="card-dark p-10 text-center">
            <div className="text-2xl text-gold-light mb-4">Заявка отправлена</div>
            <p className="card-muted">
              Мы свяжемся с вами в течение 24 часов. Спасибо за интерес к Taldau Group.
            </p>
          </div>
        ) : (
          <div className="card-dark p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">Имя</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Телефон</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Интересующий проект</label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold/50 transition-colors"
                >
                  <option value="" className="bg-navy">Выберите проект</option>
                  {projectOptions.map((o) => (
                    <option key={o} value={o} className="bg-navy">
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Планируемый объём инвестиций</label>
                <select
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold/50 transition-colors"
                >
                  <option value="" className="bg-navy">Не определился</option>
                  <option value="50" className="bg-navy">до 50 млн тг</option>
                  <option value="100" className="bg-navy">50 — 100 млн тг</option>
                  <option value="500" className="bg-navy">100 — 500 млн тг</option>
                  <option value="1000" className="bg-navy">500 млн+ тг</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Комментарий</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  placeholder="Вопросы, пожелания или дополнительная информация"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-navy font-medium text-lg rounded-lg hover:bg-gold-light transition-colors"
              >
                Отправить заявку
              </button>

              <p className="text-xs text-white/30 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        )}

        <div className="mt-16 card-dark p-8">
          <h3 className="text-lg font-semibold mb-4 text-white">Прямой контакт</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs card-dim mb-1">Телефон</div>
              <div className="text-sm text-white">+7 (XXX) XXX-XX-XX</div>
            </div>
            <div>
              <div className="text-xs card-dim mb-1">Email</div>
              <div className="text-sm text-white">info@taldaugroup.kz</div>
            </div>
            <div>
              <div className="text-xs card-dim mb-1">WhatsApp</div>
              <div className="text-sm text-white">+7 (XXX) XXX-XX-XX</div>
            </div>
            <div>
              <div className="text-xs card-dim mb-1">Офис</div>
              <div className="text-sm text-white">Алматы, Казахстан</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
