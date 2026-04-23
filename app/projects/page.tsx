import Link from "next/link";

const projects = [
  {
    id: "almaty",
    tag: "Недвижимость",
    stage: "Выкуп земли",
    title: "Клубный квартал Айманова",
    subtitle: "Алматы, Бостандыкский район · ул. Айманова 217",
    description: "Премиальный клубный квартал бизнес-класса, вдохновлённый лучшими проектами Алматы — ЖК Estet (BAZIS-A) и Клубный дом 44 (BI Group). 3-4 корпуса до 5 этажей, авторская архитектура, натуральные материалы фасада. Закрытая территория с озеленённым двором, подземный паркинг, консьерж. Street retail на первых этажах.",
    details: [
      { label: "Локация", value: "Айманова 217, Бостандыкский район" },
      { label: "Формат", value: "Клубный квартал бизнес-класса" },
      { label: "Этажность", value: "3-4 корпуса, до 5 этажей" },
      { label: "Архитектура", value: "Авторский проект (ориентиры: Estet, КД 44)" },
      { label: "Фасад", value: "Клинкерный кирпич + натуральный камень" },
      { label: "Потолки", value: "До 3.5 м" },
      { label: "Территория", value: "Закрытый двор, car-free, озеленение" },
      { label: "Паркинг", value: "Подземный" },
      { label: "Коммерция", value: "Street retail 1-2 этажи (30-40% площади)" },
      { label: "Цена продажи жилья", value: "1.2 — 1.5 млн тг/м²" },
      { label: "Цена продажи коммерции", value: "1.5 — 2.0 млн тг/м²" },
      { label: "Прогноз ROI", value: "40-60% за 24-36 месяцев" },
    ],
    highlight: "Малоэтажный бизнес-класс — дефицит в Алматы. ЖК Estet (BAZIS-A): 12-16 этажей, от 1.14 млн тг/м². Клубный дом 44 (BI Group): 12 этажей, элит-класс, от 1.6 млн тг/м², всего 44 квартиры. Наш формат берёт лучшее от обоих, но в малоэтажном клубном исполнении до 5 этажей — премиум с минимальной конкуренцией.",
  },
  {
    id: "borovoe",
    tag: "Туризм",
    stage: "Концепция",
    title: "Боровое Парк",
    subtitle: "Акмолинская область · Бурабай",
    description: "Круглогодичный туристический комплекс по модели европейских парков (Center Parcs). Коттеджный посёлок, гостиница, спа, аквапарк, активный отдых — в одной из красивейших природных локаций Казахстана. Партнёрство с акиматом Акмолинской области.",
    details: [
      { label: "Локация", value: "Бурабай, Акмолинская область" },
      { label: "Формат", value: "Природный курорт / эко-парк" },
      { label: "Эталон", value: "Center Parcs (Нидерланды/Франция)" },
      { label: "Инфраструктура", value: "70+ коттеджей, гостиница, аквапарк, спа" },
      { label: "Сезонность", value: "Круглогодичный (лето: озёра, зима: лыжи)" },
      { label: "Партнёр", value: "Акимат Акмолинской области" },
      { label: "Гос. поддержка", value: "Программа развития туризма РК" },
      { label: "Оценочный бюджет", value: "~6 млрд тенге" },
    ],
    highlight: "Казахстан вкладывает в Боровое как международный курорт. Партнёрство с акиматом = земля + инфраструктура + преференции. Круглогодичный поток — нет зависимости от одного сезона.",
  },
  {
    id: "dubai",
    tag: "Международные активы",
    stage: "Входим сейчас",
    title: "Дубай Активы",
    subtitle: "ОАЭ · Дубай",
    description: "Представительство в Дубае и покупка активов на растущем рынке. Недвижимость, премиальные автомобили и другие ликвидные активы. Мост для казахстанских инвесторов, которые хотят диверсифицировать капитал в ОАЭ.",
    details: [
      { label: "Офис", value: "Представительство в DMCC / Business Bay" },
      { label: "Недвижимость", value: "2-4 объекта (апартаменты, виллы)" },
      { label: "Авто", value: "Премиальный сегмент (перепродажа + аренда)" },
      { label: "Целевая аудитория", value: "Инвесторы из Казахстана" },
      { label: "Прогноз доходности", value: "12-20% годовых" },
      { label: "Стратегия", value: "Ранний вход на растущем рынке" },
    ],
    highlight: "Дубай — один из самых быстрорастущих рынков недвижимости в мире. Вход сейчас = максимальная доходность через 2-3 года. Казахстанские инвесторы активно ищут выходы на ОАЭ.",
  },
  {
    id: "alatau",
    tag: "Технопарк",
    stage: "Партнёрство",
    title: "СЭЗ Алатау",
    subtitle: "Алматинская область · СЭЗ «Алатау»",
    description: "Стратегическое партнёрство со Специальной экономической зоной. Win-win модель: зона получает развитие территории и новых резидентов, мы получаем налоговые преференции, готовую инфраструктуру и упрощённые процедуры.",
    details: [
      { label: "Партнёр", value: "СЭЗ «Алатау»" },
      { label: "Формат", value: "Офисный центр 3,000 м²" },
      { label: "КПН", value: "0% (преференция СЭЗ)" },
      { label: "НДС", value: "0% (преференция СЭЗ)" },
      { label: "Инфраструктура", value: "Готовые коммуникации, дороги, охрана" },
      { label: "Прогноз IRR", value: "22-28% с учётом льгот" },
    ],
    highlight: "0% КПН и 0% НДС кардинально меняют экономику проекта. То что в обычных условиях даёт 15% доходности, в СЭЗ даёт 22-28%. Партнёрство, а не просто аренда.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gold-line mb-6" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Проекты</h1>
        <p className="text-text-muted mb-16 max-w-2xl">
          Четыре направления инвестиций в реальные активы — от клубной недвижимости в Алматы до международных активов в Дубае.
        </p>

        <div className="space-y-16">
          {projects.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="scroll-mt-24 p-8 md:p-10 rounded-lg border border-border bg-navy-light/30"
            >
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {p.details.map((d) => (
                  <div key={d.label} className="p-4 rounded bg-navy/50 border border-border">
                    <div className="text-xs text-text-dim mb-1">{d.label}</div>
                    <div className="text-sm font-medium">{d.value}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded border-l-2 border-gold bg-gold/5">
                <p className="text-sm text-text-muted leading-relaxed">{p.highlight}</p>
              </div>
            </article>
          ))}
        </div>

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
