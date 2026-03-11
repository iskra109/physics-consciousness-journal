import React, { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("ru");

  const content = {
    ru: {
      brand: "ФИЗИКА СОЗНАНИЯ",
      subtitle: "Онлайн-журнал будущего человека",
      nav: [
        { id: "start", title: "Начало" },
        { id: "manifesto", title: "Манифест" },
        { id: "feature", title: "Главная статья" },
        { id: "theses", title: "Тезисы" },
        { id: "future", title: "Архив тем" },
        { id: "about", title: "Об издании" },
      ],
      issue: "Выпуск 01",
      editorialTitle: "Почему мы запускаем этот журнал сейчас",
      editorialText: [
        "Мы живём в момент, когда интеллект перестаёт быть достаточным определением человека. ИИ уже умеет генерировать текст, изображение, гипотезы, стратегии и всё глубже входит в пространство, которое долго считалось привилегией человеческого ума.",
        "Именно поэтому сегодня нам нужен не ещё один медиа-продукт о технологиях, а издание, способное поставить более серьёзный вопрос: что остаётся человеческим, когда мышление больше не является нашей монополией.",
        "«Физика сознания» — это журнал о целостном видении человека и мира. О языке, в котором наука, сознание, технологии, свобода и внутренняя зрелость человека раскрываются не как разделённые области, а как единое пространство новой реальности."
      ],
      manifestoTitle:
        "Сознание — это не тема на периферии будущего. Это его источник, его качество и его мера.",
      manifestoText: [
        "Нас интересует человек не как функция системы, а как носитель свободы, смысла, любви и внутренней причины.",
        "Мы ищем язык, в котором наука, глубина, ответственность и целостность больше не противостоят друг другу."
      ],
      featureTitle: "За пределами интеллекта: почему будущее зависит от сознания",
      featureText: [
        "Сегодня главный вопрос эпохи искусственного интеллекта уже не в том, может ли ИИ мыслить. Настоящий вопрос теперь звучит иначе: достаточно ли самого мышления, чтобы определить человека.",
        "Если интеллект можно моделировать, масштабировать и распределять по системам, значит, человеческая уникальность не исчерпывается вычислением. Центр тяжести смещается в другую область — в сознание.",
        "Чем совершеннее становятся системы предсказания, персонализации и автоматизации, тем острее становится риск утраты субъектности. Это делает вопрос о сознании не роскошью философии, а практическим условием свободы.",
        "Именно поэтому в серьёзный разговор о будущем всё настойчивее возвращаются темы, долго вытесненные на периферию как слишком мягкие: любовь, внимание, ответственность, внутреннее достоинство, цельность."
      ],
      thesesTitle: "Ключевые тезисы",
      theses: [
        "ИИ лишает человека монополии на обработку информации, но не на сознание.",
        "Квантовая теория не доказывает духовные модели мира, но делает вопрос о наблюдателе исторически неизбежным.",
        "Реальность человека — не только данность, но и результат селекции внимания, смысла, ценностей и действия.",
        "Изобилие без субъектности не освобождает: оно может превратиться в новую форму зависимости.",
        "Будущее цивилизации зависит не только от интеллекта систем, но и от зрелости носителя этой мощности.",
        "Любовь — не сентимент, а принцип интеграции сознания, при котором человек перестаёт быть жертвой и становится причиной."
      ],
      futureTitle: "Следующие выпуски",
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
      aboutTitle: "Журнал о новой картине человека",
      aboutText: [
        "«Физика сознания» — авторское онлайн-издание о будущем человека после ИИ.",
        "Мы публикуем тексты о сознании, наблюдателе, свободе, любви, квантовой неопределённости, субъектности, цифровом контроле и цивилизационных сценариях развития мира."
      ]
    },
    en: {
      brand: "PHYSICS OF CONSCIOUSNESS",
      subtitle: "Online Journal of the Future Human",
      nav: [
        { id: "start", title: "Start" },
        { id: "manifesto", title: "Manifesto" },
        { id: "feature", title: "Feature" },
        { id: "theses", title: "Theses" },
        { id: "future", title: "Archive" },
        { id: "about", title: "About" },
      ],
      issue: "Issue 01",
      editorialTitle: "Why we are launching this journal now",
      editorialText: [
        "We live in a moment when intelligence is no longer a sufficient definition of the human. AI can already generate text, images, hypotheses, and strategies, and it is moving ever deeper into a space long considered the privilege of the human mind.",
        "That is why what we need today is not another media product about technology, but a publication capable of asking a more serious question: what remains human when thought is no longer our monopoly?",
        "Physics of Consciousness is a journal about a holistic vision of the human being and the world — a language in which science, consciousness, technology, freedom, and inner maturity are revealed not as separate domains, but as a unified space of a new reality."
      ],
      manifestoTitle:
        "Consciousness is not a topic on the periphery of the future. It is its source, its quality, and its measure.",
      manifestoText: [
        "We are interested in the human not as a function of a system, but as a bearer of freedom, meaning, love, and inner causality.",
        "We seek a language in which science, depth, responsibility, and wholeness no longer oppose one another."
      ],
      featureTitle: "Beyond Intelligence: Why the Future Depends on Consciousness",
      featureText: [
        "The central question of the age of artificial intelligence is no longer whether AI can think. The real question now sounds different: is thinking alone enough to define the human being?",
        "If intelligence can be modeled, scaled, and distributed across systems, then human uniqueness is not exhausted by computation. The center of gravity shifts into another domain — consciousness.",
        "The more perfect predictive, personalized, and automated systems become, the sharper the risk of losing subjecthood. This makes the question of consciousness not a luxury of philosophy, but a practical condition of freedom.",
        "That is why themes long pushed to the periphery as too soft return ever more insistently into serious conversation about the future: love, attention, responsibility, inner dignity, wholeness."
      ],
      thesesTitle: "Key Theses",
      theses: [
        "AI deprives the human of a monopoly on information processing, but not on consciousness.",
        "Quantum theory does not prove spiritual models of the world, but it makes the question of the observer historically unavoidable.",
        "Human reality is not only a given, but also the result of the selection of attention, meaning, values, and action.",
        "Abundance without subjecthood does not liberate: it can turn into a new form of dependency.",
        "The future of civilization depends not only on the intelligence of systems, but on the maturity of the bearer of that power.",
        "Love is not sentiment, but a principle of integration of consciousness, through which the human ceases to be a victim and becomes a cause."
      ],
      futureTitle: "Upcoming Issues",
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
      aboutTitle: "A Journal About a New Picture of the Human",
      aboutText: [
        "Physics of Consciousness is an authorial online publication about the future of the human after AI.",
        "We publish texts on consciousness, the observer, freedom, love, quantum uncertainty, subjecthood, digital control, and civilizational scenarios of world development."
      ]
    }
  };

  const current = content[language];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%),linear-gradient(to_bottom,_#0a0a0a,_#111111_35%,_#0a0a0a)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[12px] uppercase tracking-[0.52em] text-stone-400 md:text-[14px] md:tracking-[0.58em]">
                {current.brand}
              </div>
              <div className="mt-2 text-[18px] leading-tight tracking-[0.16em] md:text-[30px] md:tracking-[0.16em]">
                {language === "ru" ? (
                  <>
                    Онлайн-журнал
                    <br />
                    будущего человека
                  </>
                ) : (
                  <>
                    Online Journal
                    <br />
                    of the Future Human
                  </>
                )}
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">
              <button
                type="button"
                onClick={() => setLanguage("ru")}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.2em] transition ${
                  language === "ru" ? "bg-white/12 text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.2em] transition ${
                  language === "en" ? "bg-white/12 text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <nav className="-mx-1 mt-4 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2.5 px-1 text-sm text-stone-300 md:flex-wrap md:gap-3.5 md:text-base">
              {current.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="whitespace-nowrap rounded-full border border-white/10 px-3.5 py-2 text-xs leading-none transition hover:border-white/30 hover:text-white md:px-4 md:py-2 md:text-base"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section id="start" className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:pb-20 md:pt-24">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 md:p-10">
            <div className="mb-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-300">
              <span className="leading-tight">{current.issue}</span>
            </div>

            <h1 className="max-w-5xl text-4xl font-light leading-[0.92] tracking-[-0.04em] md:text-6xl xl:text-7xl">
              {current.editorialTitle}
            </h1>

            <div className="mt-8 max-w-5xl space-y-6 text-lg leading-relaxed text-stone-300 md:text-xl">
              {current.editorialText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="manifesto" className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-stone-400">
              {language === "ru" ? "Манифест" : "Manifesto"}
            </div>
            <h2 className="mt-4 max-w-4xl text-3xl font-light leading-tight md:text-5xl">
              {current.manifestoTitle}
            </h2>
            <div className="mt-8 grid gap-6 text-base leading-relaxed text-stone-300 md:grid-cols-2 md:text-lg">
              {current.manifestoText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="feature" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="rounded-[32px] border border-white/10 bg-[#111111] p-8 shadow-2xl shadow-black/40 md:p-12 xl:p-16">
            <div className="max-w-4xl">
              <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
                {language === "ru" ? "Эссе / Выпуск 01" : "Essay / Issue 01"}
              </div>
              <h2 className="mt-4 text-4xl font-light leading-[0.95] tracking-[-0.04em] md:text-6xl">
                {current.featureTitle}
              </h2>

              <div className="mt-10 space-y-6 text-lg leading-8 text-stone-200">
                {current.featureText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="theses" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8 text-xs uppercase tracking-[0.35em] text-stone-500">
            {current.thesesTitle}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {current.theses.map((item, idx) => (
              <div
                key={idx}
                className="flex min-h-[180px] flex-col justify-between rounded-[26px] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  {language === "ru" ? "Тезис" : "Thesis"} {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 text-xl leading-snug text-stone-100">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="future" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8 text-xs uppercase tracking-[0.35em] text-stone-500">
            {current.futureTitle}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {current.future.map((issue, idx) => (
              <div
                key={idx}
                className="rounded-[28px] border border-white/10 bg-[#121212] p-7 shadow-lg shadow-black/20"
              >
                <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
                  {language === "ru" ? "В работе" : "In Progress"}
                </div>
                <h3 className="mt-4 text-2xl leading-tight">{issue.title}</h3>
                <p className="mt-4 leading-relaxed text-stone-300">{issue.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:pb-32 md:pt-16">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 md:p-14">
            <div className="text-xs uppercase tracking-[0.35em] text-stone-500">
              {current.aboutTitle}
            </div>
            <div className="mt-8 grid gap-8 text-base leading-relaxed text-stone-300 md:grid-cols-2 md:text-lg">
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
