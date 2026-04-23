import Link from "next/link";

const stats = [
  { value: "4", label: "Проекта в портфеле" },
  { value: "2", label: "Страны присутствия" },
  { value: "$50M+", label: "Целевой объём" },
  { value: "2026", label: "Год основания" },
];

const projects = [
  {
    id: "almaty",
    title: "Квартал Айманова",
    location: "Алматы, Бостандыкский район",
    description: "Mixed-use квартал до 5 этажей. Жильё и коммерческие площади на пересечении ключевых артерий города.",
    tag: "Недвижимость",
    stage: "Выкуп земли",
  },
  {
    id: "borovoe",
    title: "Боровое Парк",
    location: "Акмолинская область",
    description: "Туристический комплекс европейского уровня. Природный парк с круглогодичной инфраструктурой.",
    tag: "Туризм",
    stage: "Концепция",
  },
  {
    id: "dubai",
    title: "Дубай Активы",
    location: "ОАЭ, Дубай",
    description: "Покупка недвижимости и активов на растущем рынке. Мост для казахстанских инвесторов.",
    tag: "Международные активы",
    stage: "Входим сейчас",
  },
  {
    id: "alatau",
    title: "СЭЗ Алатау",
    location: "Алматинская область",
    description: "Партнёрство с технопарком. Налоговые преференции и инфраструктура для резидентов.",
    tag: "Технопарк",
    stage: "Партнёрство",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold rounded-full blur-[96px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="gold-line mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            Инвестиции в<br />
            <span className="text-gradient-gold">реальные активы</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
            Недвижимость, туризм и международные активы. Казахстан и Дубай. 
            Выверенные решения для долгосрочного роста капитала.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-medium rounded hover:bg-gold-light transition-colors"
            >
              Смотреть проекты
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gold/30 text-gold rounded hover:bg-gold/10 transition-colors"
            >
              Стать инвестором
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-navy-light/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-gradient-gold mb-2">{s.value}</div>
                <div className="text-sm text-text-dim">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gold-line mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Портфель проектов</h2>
          <p className="text-text-muted mb-12 max-w-xl">
            Четыре направления с фокусом на реальные активы и долгосрочный рост.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects#${p.id}`}
                className="card-hover block p-8 rounded-lg border border-border bg-navy-light/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs bg-gold/10 text-gold rounded-full border border-gold/20">
                    {p.tag}
                  </span>
                  <span className="px-3 py-1 text-xs bg-navy-mid text-text-dim rounded-full">
                    {p.stage}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-text-dim mb-3">{p.location}</p>
                <p className="text-sm text-text-muted leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-24 bg-navy-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gold-line mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Почему сейчас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-2xl text-gold mb-4 font-semibold">01</div>
              <h3 className="text-lg font-medium mb-3">Земля дорожает</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Стоимость земли в Алматы растёт на 15-25% ежегодно. 
                Каждый квартал промедления увеличивает стоимость входа.
              </p>
            </div>
            <div className="p-6">
              <div className="text-2xl text-gold mb-4 font-semibold">02</div>
              <h3 className="text-lg font-medium mb-3">Туризм на подъёме</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Казахстан активно развивает туристическую инфраструктуру. 
                Государственные программы поддержки и рост потока.
              </p>
            </div>
            <div className="p-6">
              <div className="text-2xl text-gold mb-4 font-semibold">03</div>
              <h3 className="text-lg font-medium mb-3">Дубай растёт</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Рынок недвижимости Дубая показывает устойчивый рост. 
                Ранний вход = максимальная доходность.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Готовы <span className="text-gradient-gold">инвестировать</span>?
          </h2>
          <p className="text-text-muted mb-10">
            Оставьте заявку — мы свяжемся и расскажем детали по интересующему проекту.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-navy font-medium text-lg rounded hover:bg-gold-light transition-colors"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </>
  );
}
