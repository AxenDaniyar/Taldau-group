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
    title: "Клубный квартал Айманова",
    location: "Алматы, Бостандыкский район",
    description: "Премиальный клубный квартал до 5 этажей. Вдохновлён ЖК Estet и Клубным домом 44 (BI Group). Авторская архитектура, закрытый двор, консьерж, street retail.",
    tag: "Недвижимость",
    stage: "Выкуп земли",
  },
  {
    id: "borovoe",
    title: "Боровое Парк",
    location: "Акмолинская область",
    description: "Туристический комплекс европейского уровня. Природный парк с круглогодичной инфраструктурой по модели Center Parcs.",
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
      {/* Hero — dark section */}
      <section className="relative min-h-[85vh] flex items-center bg-navy">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold rounded-full blur-[96px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="gold-line mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-white">
            Инвестиции в<br />
            <span className="text-gradient-gold">реальные активы</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
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
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white rounded hover:bg-white/10 transition-colors"
            >
              Стать инвестором
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — light */}
      <section className="border-b border-border">
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

      {/* Projects — light bg, dark cards */}
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
                className="card-dark block p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs bg-gold/15 text-gold-light rounded-full border border-gold/20">
                    {p.tag}
                  </span>
                  <span className="px-3 py-1 text-xs bg-white/5 text-white/40 rounded-full">
                    {p.stage}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
                <p className="text-sm card-dim mb-3">{p.location}</p>
                <p className="text-sm card-muted leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why now — subtle bg */}
      <section className="py-24 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gold-line mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Почему сейчас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="text-2xl text-gold mb-4 font-semibold">01</div>
              <h3 className="text-lg font-medium mb-3">Земля дорожает</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Стоимость земли в Бостандыкском районе растёт на 15-25% ежегодно. 
                Каждый квартал промедления — миллионы к стоимости входа.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="text-2xl text-gold mb-4 font-semibold">02</div>
              <h3 className="text-lg font-medium mb-3">Дефицит малоэтажки</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Премиальных клубных домов до 5 этажей в Алматы единицы. 
                Спрос растёт, предложения нет. Окно возможностей.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="text-2xl text-gold mb-4 font-semibold">03</div>
              <h3 className="text-lg font-medium mb-3">Дубай на подъёме</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Рынок недвижимости Дубая показывает устойчивый рост. 
                Ранний вход сейчас = максимальная доходность через 2-3 года.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Готовы <span className="text-gradient-gold">инвестировать</span>?
          </h2>
          <p className="text-white/50 mb-10">
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
