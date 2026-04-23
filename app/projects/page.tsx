import Link from "next/link";

const projects = [
  {
    id: "almaty",
    tag: "Недвижимость",
    stage: "Выкуп земли",
    title: "Квартал Айманова",
    subtitle: "Алматы, Бостандыкский район",
    description: "Новый mixed-use квартал на улице Айманова 217 — одном из самых перспективных адресов Бостандыкского района. До 5 этажей: коммерческие помещения на 1-2 этажах, жилые квартиры на 3-5 этажах.",
    details: [
      { label: "Локация", value: "Айманова 217, Бостандыкский район, Алматы" },
      { label: "Формат", value: "Mixed-use: жильё + коммерция (street retail)" },
      { label: "Этажность", value: "До 5 этажей" },
      { label: "Текущий статус", value: "Выкуп земельного участка" },
      { label: "Прогноз ROI", value: "40-60% за 24-36 месяцев" },
      { label: "Продажа коммерции", value: "800,000 — 1,200,000 тг/м²" },
    ],
    highlight: "Земля в Бостандыкском районе дорожает на 15-25% ежегодно. Каждый год промедления увеличивает стоимость входа на 200-400 млн тенге.",
  },
  {
    id: "borovoe",
    tag: "Туризм",
    stage: "Концепция",
    title: "Боровое Парк",
    subtitle: "Акмолинская область, Боровое",
    description: "Туристический комплекс европейского масштаба по модели Center Parcs. Круглогодичный курорт с современной инфраструктурой в одном из красивейших мест Казахстана.",
    details: [
      { label: "Локация", value: "Бурабай, Акмолинская область" },
      { label: "Формат", value: "Природный парк / эко-курорт" },
      { label: "Модель", value: "Center Parcs (Европа)" },
      { label: "Партнёры", value: "Акимат Акмолинской области" },
      { label: "Гос. поддержка", value: "Программа развития туризма РК" },
      { label: "Сезонность", value: "Круглогодичный (лето + зима)" },
    ],
    highlight: "Казахстан вкладывает в развитие Борового как международного курорта. Партнёрство с акиматом = земля, инфраструктура, преференции.",
  },
  {
    id: "dubai",
    tag: "Международные активы",
    stage: "Входим сейчас",
    title: "Дубай Активы",
    subtitle: "ОАЭ, Дубай",
    description: "Представительство в Дубае + покупка недвижимости и активов на растущем рынке. Мост для казахстанских инвесторов, которые хотят диверсифицировать капитал в ОАЭ.",
    details: [
      { label: "Направление 1", value: "Офис / представительство в Дубае" },
      { label: "Направление 2", value: "Покупка недвижимости (рост рынка)" },
      { label: "Направление 3", value: "Покупка активов (автомобили, люкс)" },
      { label: "Целевая аудитория", value: "Инвесторы из КЗ" },
      { label: "Стратегия", value: "Ранний вход на растущем рынке" },
      { label: "Формат", value: "Агентская модель + собственные активы" },
    ],
    highlight: "Рынок Дубая показывает устойчивый рост. Ранний вход сейчас — максимальная доходность через 2-3 года.",
  },
  {
    id: "alatau",
    tag: "Технопарк",
    stage: "Партнёрство",
    title: "СЭЗ Алатау",
    subtitle: "Алматинская область",
    description: "Стратегическое партнёрство с Специальной экономической зоной «Алатау». Win-win: зона получает развитие и резидентов, мы получаем налоговые преференции и инфраструктуру.",
    details: [
      { label: "Партнёр", value: "СЭЗ «Алатау»" },
      { label: "Модель", value: "Резидентство + совместные проекты" },
      { label: "Преференции", value: "Налоговые льготы, упрощённые процедуры" },
      { label: "Инфраструктура", value: "Готовые площади, коммуникации" },
      { label: "Синергия", value: "IT + девелопмент + международные связи" },
      { label: "Принцип", value: "Win-win: развитие территории + преференции" },
    ],
    highlight: "СЭЗ Алатау предлагает реальные налоговые преференции и инфраструктуру. Партнёрство, а не аренда.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gold-line mb-6" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Проекты</h1>
        <p className="text-text-muted mb-16 max-w-2xl">
          Четыре направления инвестиций в реальные активы — от недвижимости в Алматы до международных активов в Дубае.
        </p>

        <div className="space-y-16">
          {projects.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="scroll-mt-24 p-8 md:p-10 rounded-lg border border-border bg-navy-light/30"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs bg-gold/10 text-gold rounded-full border border-gold/20">
                  {p.tag}
                </span>
                <span className="px-3 py-1 text-xs bg-navy-mid text-text-dim rounded-full">
                  {p.stage}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-2">{p.title}</h2>
              <p className="text-text-dim mb-6">{p.subtitle}</p>
              <p className="text-text-muted leading-relaxed mb-8 max-w-3xl">{p.description}</p>

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {p.details.map((d) => (
                  <div key={d.label} className="p-4 rounded bg-navy/50 border border-border">
                    <div className="text-xs text-text-dim mb-1">{d.label}</div>
                    <div className="text-sm font-medium">{d.value}</div>
                  </div>
                ))}
              </div>

              {/* Highlight */}
              <div className="p-5 rounded border-l-2 border-gold bg-gold/5">
                <p className="text-sm text-text-muted leading-relaxed">{p.highlight}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">Интересует конкретный проект?</h3>
          <p className="text-text-muted mb-8">Свяжитесь с нами — предоставим детальную финмодель и документацию.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-navy font-medium text-lg rounded hover:bg-gold-light transition-colors"
          >
            Связаться
          </Link>
        </div>
      </div>
    </section>
  );
}
