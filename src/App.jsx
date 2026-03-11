import React, { useMemo, useRef, useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const tabsRef = useRef(null);

  const content = {
    ru: {
      brand: "ФИЗИКА СОЗНАНИЯ",
      subtitleTop: "Онлайн-журнал",
      subtitleBottom: "будущего человека",
      issue: "Выпуск 01",
      nav: [
        { id: "start", title: "Начало" },
        { id: "manifesto", title: "Манифест" },
        { id: "feature", title: "Главная статья" },
        { id: "theses", title: "Тезисы" },
        { id: "future", title: "Архив тем" },
        { id: "about", title: "Об издании" },
      ],
      editorialTitle: "Почему мы запускаем этот журнал сейчас",
      editorialText: [
        "Мы живём в момент, когда интеллект перестаёт быть достаточным определением человека. ИИ уже умеет генерировать текст, изображение, гипотезы, стратегии и всё глубже входит в пространство, которое долго считалось привилегией человеческого ума.",
        "Именно поэтому сегодня нам нужен не ещё один медиа-продукт о технологиях, а издание, способное поставить более серьёзный вопрос: что остаётся человеческим, когда мышление больше не является нашей монополией.",
        "«Физика сознания» — это журнал о целостном видении человека и мира. О языке, в котором наука, сознание, технологии, свобода и внутренняя зрелость человека раскрываются не как разделённые области, а как единое пространство новой реальности."
      ],
      lineLabel: "Редакционная линия",
      lineText:
        "Не объяснять мир старым языком, а создать новый язык для будущего человека.",
      manifestoLabel: "Манифест",
      manifestoTitle:
        "Сознание — это не тема на периферии будущего. Это его источник, его качество и его мера.",
      manifestoText: [
        "Нас интересует человек не как функция системы, а как носитель свободы, смысла, любви и внутренней причины.",
        "Мы ищем язык, в котором наука, глубина, ответственность и целостность больше не противостоят друг другу."
      ],
      featureLabel: "Эссе / Выпуск 01",
      featureTitle: "За пределами интеллекта: почему будущее зависит от сознания",
      featureText: [
        "Сегодня главный вопрос эпохи искусственного интеллекта уже не в том, может ли ИИ мыслить. Настоящий вопрос теперь звучит иначе: достаточно ли самого мышления, чтобы определить человека.",
        "Если интеллект можно моделировать, масштабировать и распределять по системам, значит, человеческая уникальность не исчерпывается вычислением. Центр тяжести смещается в другую область — в сознание.",
        "Чем совершеннее становятся системы предсказания, персонализации и автоматизации, тем острее становится риск утраты субъектности. Это делает вопрос о сознании не роскошью философии, а практическим условием свободы.",
        "Именно поэтому в серьёзный разговор о будущем всё настойчивее возвращаются темы, долго вытесненные на периферию как слишком мягкие: любовь, внимание, ответственность, внутреннее достоинство, цельность."
      ],
      thesesLabel: "Ключевые тезисы",
      thesisPrefix: "Тезис",
      theses: [
        "ИИ лишает человека монополии на обработку информации, но не на сознание.",
        "Квантовая теория не доказывает духовные модели мира, но делает вопрос о наблюдателе исторически неизбежным.",
        "Реальность человека — не только данность, но и результат селекции внимания, смысла, ценностей и действия.",
        "Изобилие без субъектности не освобождает: оно может превратиться в новую форму зависимости.",
        "Будущее цивилизации зависит не только от интеллекта систем, но и от зрелости носителя этой мощности.",
        "Любовь — не сентимент, а принцип интеграции сознания, при котором человек перестаёт быть жертвой и становится причиной."
      ],
      futureLabel: "Следующие выпуски",
      futureBadge: "В работе",
      future: [
        {
          title: "После ИИ: новая антропология человека",
          text: "Как меняется определение человека в мире, где интеллект масштабируется, копируется и автоматизируется."
        },
        {
          title: "Сингулярность Любви",
          text: "Как может выглядеть цивилизационный скачок, если центральной силой развития станет не мощность системы, а зрелость сознания."
        },
        {
          title: "Новый Человек и конец старой эпохи",
          text: "Почему будущее зависит от перехода от внешней причинности к внутреннему состоянию."
        },
        {
          title: "Внимание как последняя валюта свободы",
          text: "Почему борьба за внимание становится глубже любой экономической модели."
        }
      ],
      aboutLabel: "Об издании",
      aboutTitle: "Журнал о новой картине человека",
      aboutText: [
        "«Физика сознания» — авторское онлайн-издание о будущем человека после ИИ.",
        "Мы публикуем тексты о сознании, наблюдателе, свободе, любви, квантовой неопределённости, субъектности, цифровом контроле и цивилизационных сценариях развития мира."
      ]
    },
    en: {
      brand: "PHYSICS OF CONSCIOUSNESS",
      subtitleTop: "Online Journal",
      subtitleBottom: "of the Future Human",
      issue: "Issue 01",
      nav: [
        { id: "start", title: "Start" },
        { id: "manifesto", title: "Manifesto" },
        { id: "feature", title: "Feature" },
        { id: "theses", title: "Theses" },
        { id: "future", title: "Archive" },
        { id: "about", title: "About" },
      ],
      editorialTitle: "Why we are launching this journal now",
      editorialText: [
        "We live in a moment when intelligence is no longer a sufficient definition of the human. AI can already generate text, images, hypotheses, and strategies, and it is moving ever deeper into a space long considered the privilege of the human mind.",
        "That is why what we need today is not another media product about technology, but a publication capable of asking a more serious question: what remains human when thought is no longer our monopoly?",
        "Physics of Consciousness is a journal about a holistic vision of the human being and the world. It is a language in which science, consciousness, technology, freedom, and inner maturity are revealed not as separate domains, but as a unified space of a new reality."
      ],
      lineLabel: "Editorial Line",
      lineText:
        "Not to explain the world in an old language, but to create a new language for the future human.",
      manifestoLabel: "Manifesto",
      manifestoTitle:
        "Consciousness is not a topic on the periphery of the future. It is its source, its quality, and its measure.",
      manifestoText: [
        "We are interested in the human not as a function of a system, but as a bearer of freedom, meaning, love, and inner causality.",
        "We seek a language in which science, depth, responsibility, and wholeness no longer oppose one another."
      ],
      featureLabel: "Essay / Issue 01",
      featureTitle: "Beyond Intelligence: Why the Future Depends on Consciousness",
      featureText: [
        "The central question of the age of artificial intelligence is no longer whether AI can think. The real question now sounds different: is thinking alone enough to define the human being?",
        "If intelligence can be modeled, scaled, and distributed across systems, then human uniqueness is not exhausted by computation. The center of gravity shifts into another domain — consciousness.",
        "The more perfect predictive, personalized, and automated systems become, the sharper the risk of losing subjecthood. This makes the question of consciousness not a luxury of philosophy, but a practical condition of freedom.",
        "That is why themes long pushed to the periphery as too soft return ever more insistently into serious conversation about the future: love, attention, responsibility, inner dignity, wholeness."
      ],
      thesesLabel: "Key Theses",
      thesisPrefix: "Thesis",
      theses: [
        "AI deprives the human of a monopoly on information processing, but not on consciousness.",
        "Quantum theory does not prove spiritual models of the world, but it makes the question of the observer historically unavoidable.",
        "Human reality is not only a given, but also the result of the selection of attention, meaning, values, and action.",
        "Abundance without subjecthood does not liberate: it can turn into a new form of dependency.",
        "The future of civilization depends not only on the intelligence of systems, but on the maturity of the bearer of that power.",
        "Love is not sentiment, but a principle of integration of consciousness, through which the human ceases to be a victim and becomes a cause."
      ],
      futureLabel: "Upcoming Issues",
      futureBadge: "In Progress",
      future: [
        {
          title: "After AI: A New Anthropology of the Human",
          text: "How the definition of the human changes in a world where intelligence is scaled, copied, and automated."
        },
        {
          title: "The Singularity of Love",
          text: "What a civilizational leap might look like if the central force of development becomes not system power, but the maturity of consciousness."
        },
        {
          title: "The New Human and the End of the Old Epoch",
          text: "Why the future depends on the transition from external causality to inner state."
        },
        {
          title: "Attention as the Final Currency of Freedom",
          text: "Why the struggle for attention is becoming deeper than any economic model."
        }
      ],
      aboutLabel: "About",
      aboutTitle: "A Journal About a New Picture of the Human",
      aboutText: [
        "Physics of Consciousness is an authorial online publication about the future of the human after AI.",
        "We publish texts on consciousness, the observer, freedom, love, quantum uncertainty, subjecthood, digital control, and civilizational scenarios of world development."
      ]
    }
  };

  const current = content[language];

  const scrollToId = (id) => (event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 110;
    const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const cardClass =
    "rounded-[22px] border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";

  return (
    <div className="min-h-screen bg-[#060606] text-stone-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_60%_0%,_rgba(255,255,255,0.04),_transparent_30%),linear-gradient(to_bottom,_#050505,_#0b0b0b_32%,_#050505)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto max-w-[1120px] px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[9px] uppercase tracking-[0.5em] text-stone-400 md:text-[10px] md:tracking-[0.55em]">
                {current.brand}
              </div>
              <div className="mt-2 text-[17px] leading-[1.05] tracking-[0.06em] md:text-[20px] md:tracking-[0.08em]">
                {current.subtitleTop}
                <br />
                {current.subtitleBottom}
              </div>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
              <button
                type="button"
                onClick={() => setLanguage("ru")}
                className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] transition md:text-xs ${
                  language === "ru" ? "bg-white/12 text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] transition md:text-xs ${
                  language === "en" ? "bg-white/12 text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <nav ref={tabsRef} className="-mx-1 mt-4 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2 px-1 md:flex-wrap md:gap-2.5">
              {current.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={scrollToId(item.id)}
                  className="whitespace-nowrap rounded-full border border-white/10 px-3 py-2 text-[11px] leading-none text-stone-300 transition hover:border-white/25 hover:text-white md:px-3.5 md:text-[12px]"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section id="start" className="mx-auto max-w-[1120px] px-4 pb-10 pt-12 md:px-6 md:pb-14 md:pt-16">
          <div className={`${cardClass} p-6 md:p-8`}>
            <div className="mb-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-stone-300 md:text-[11px]">
              {current.issue}
            </div>

            <h1 className="max-w-[940px] text-[32px] font-light leading-[0.96] tracking-[-0.04em] md:text-[54px]">
              {current.editorialTitle}
            </h1>

            <div className="mt-8 max-w-[900px] space-y-5 text-[16px] leading-[1.75] text-stone-300 md:text-[19px] md:leading-[1.85]">
              {current.editorialText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-4 md:px-6 md:py-6">
          <div className="grid gap-5 lg:grid-cols-12">
            <div id="manifesto" className={`lg:col-span-8 ${cardClass} p-6 md:p-8`}>
              <div className="text-[10px] uppercase tracking-[0.34em] text-stone-400 md:text-[11px]">
                {current.manifestoLabel}
              </div>
              <h2 className="mt-4 max-w-[760px] text-[30px] font-light leading-[1.02] tracking-[-0.035em] md:text-[50px]">
                {current.manifestoTitle}
              </h2>
              <div className="mt-7 grid gap-5 text-[15px] leading-[1.8] text-stone-300 md:grid-cols-2 md:text-[17px]">
                {current.manifestoText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-4 ${cardClass} p-6 md:p-7`}>
              <div className="text-[10px] uppercase tracking-[0.34em] text-stone-400 md:text-[11px]">
                {current.lineLabel}
              </div>
              <div className="mt-4 text-[24px] font-light leading-[1.1] tracking-[-0.02em] text-stone-100 md:text-[30px]">
                {current.lineText}
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="mx-auto max-w-[1120px] px-4 py-10 md:px-6 md:py-14">
          <div className={`${cardClass} bg-[#0d0d0d] p-6 md:p-9`}>
            <div className="max-w-[880px]">
              <div className="text-[10px] uppercase tracking-[0.32em] text-stone-500 md:text-[11px]">
                {current.featureLabel}
              </div>
              <h2 className="mt-4 text-[34px] font-light leading-[0.96] tracking-[-0.04em] md:text-[56px]">
                {current.featureTitle}
              </h2>

              <div className="mt-9 space-y-5 text-[16px] leading-[1.8] text-stone-200 md:text-[19px] md:leading-[1.9]">
                {current.featureText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="theses" className="mx-auto max-w-[1120px] px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6 text-[10px] uppercase tracking-[0.36em] text-stone-500 md:text-[11px]">
            {current.thesesLabel}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {current.theses.map((item, idx) => (
              <div key={idx} className={`${cardClass} min-h-[150px] p-5 md:min-h-[168px] md:p-6`}>
                <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 md:text-[11px]">
                  {current.thesisPrefix} {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="mt-5 text-[18px] leading-[1.45] text-stone-100 md:text-[22px] md:leading-[1.5]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="future" className="mx-auto max-w-[1120px] px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6 text-[10px] uppercase tracking-[0.36em] text-stone-500 md:text-[11px]">
            {current.futureLabel}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {current.future.map((issue, idx) => (
              <div key={idx} className={`${cardClass} bg-[#101010] p-5 md:p-6`}>
                <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 md:text-[11px]">
                  {current.futureBadge}
                </div>
                <h3 className="mt-4 text-[24px] font-light leading-[1.08] tracking-[-0.02em] md:text-[30px]">
                  {issue.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-stone-300 md:text-[16px] md:leading-[1.85]">
                  {issue.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1120px] px-4 pb-20 pt-10 md:px-6 md:pb-28 md:pt-14">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.36em] text-stone-500 md:text-[11px]">
              {current.aboutLabel}
            </div>
            <h3 className="mt-4 text-[30px] font-light leading-[1.02] tracking-[-0.03em] md:text-[44px]">
              {current.aboutTitle}
            </h3>

            <div className="mt-8 grid gap-6 text-[15px] leading-[1.85] text-stone-300 md:grid-cols-2 md:text-[17px]">
              {current.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
