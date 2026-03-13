/* MASTER VERSION — Physics of Consciousness Journal
   This version is the locked reference layout (ethalon).
   Do not structurally modify without creating a new experimental copy.
   Saved as the stable baseline for Issue 01.
*/

import React, { useEffect, useRef, useState } from "react";

export default function PhysicsOfConsciousnessJournal() {
  const [language, setLanguage] = useState("ru");
  const [activeSection, setActiveSection] = useState("cover");
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef({});
  const headerRef = useRef(null);

  const content = {
    ru: {
      brand: "ФИЗИКА СОЗНАНИЯ",
      subtitleTop: "Онлайн-журнал",
      subtitleBottom: "будущего человека",
      sections: [
        { id: "cover", title: "Начало" },
        { id: "editorial", title: "Слово редакции" },
        { id: "manifesto", title: "Манифест" },
        { id: "feature", title: "Главная статья" },
        { id: "theses", title: "Тезисы" },
        { id: "future", title: "Архив тем" },
        { id: "about", title: "Об издании" },
      ],
      issueBadge: "Выпуск 01",
      editorialTitle: "Почему мы запускаем этот журнал сейчас",
      editorialParagraphs: [
        "Мы живём во времена, когда интеллект перестаёт быть достаточным определением человека. ИИ уже умеет генерировать тексты, изображения, гипотезы, стратегии и всё глубже входит в пространство, которое долго считалось привилегией человеческого ума. Именно поэтому сегодня нам нужен не ещё один медиа-продукт о технологиях, а издание, способное поставить более серьёзный вопрос: что остаётся человеческим, когда мышление больше не является нашей монополией.",
        "«Физика сознания» — это журнал о целостном видении человека и мира. О восприятии, в котором наука, сознание, технологии, свобода и внутренняя зрелость человека раскрываются не как разделённые области, а как единое пространство новой реальности. Нас интересуют не готовые ответы, а рождение нового языка для описания будущего, в котором человек снова должен стать больше, чем функция, интерфейс или реактивный носитель потребностей.",
      ],
      lineLabel: "Редакционная линия",
      lineTitle:
        "Не объяснять мир старым языком, а создать новый язык для будущего человека.",
      lineText:
        "Здесь публикуются тексты на стыке науки, философии сознания, этики технологий и новой антропологии. Без упрощения. Без псевдонаучной риторики. Без страха перед большим вопросом.",
      manifestoLabel: "Манифест",
      manifestoTitle:
        "Сознание — это не тема на периферии будущего. Это его источник, его качество и его мера.",
      manifestoParagraphs: [
        "Нас интересует человек не как функция системы, а как носитель свободы, смысла, любви и внутренней причины. Не как адаптирующийся элемент новой эпохи, а как существо, способное участвовать в её сотворении.",
        "Мы ищем язык, в котором наука, глубина, ответственность и целостность больше не противостоят друг другу. Для нас будущее начинается там, где человек перестаёт быть реакцией и становится причиной.",
      ],
      featureLabel: "Главная статья",
      featureAside:
        "Редакционный текст о сознании, квантовой неопределённости, ИИ и новой антропологии будущего.",
      essayBadge: "Эссе / Выпуск 01",
      featureTitle: "За пределами интеллекта: почему будущее зависит от сознания",
      featureParagraphs: [
        "Сегодня главный вопрос эпохи искусственного интеллекта уже не в том, может ли ИИ мыслить. Этот вопрос стремительно теряет остроту. ИИ уже распознаёт закономерности, помогает принимать решения и всё убедительнее имитирует многие функции, которые ещё недавно считались исключительно территорией человека. Настоящий вопрос теперь звучит иначе: достаточно ли самого мышления, чтобы определить человека.",
        "Это не технологический, а антропологический поворот. Если интеллект можно моделировать, масштабировать и распределять по системам, значит, человеческая уникальность не исчерпывается вычислением. Значит, центр тяжести смещается в другую область — в сознание. Не в сознание как абстрактное слово, а в сознание как способность направлять внимание, удерживать внутреннюю целостность, выбирать ценности, нести ответственность за восприятие и действие, а в пределе — участвовать в формировании той реальности, которую человек потом называет своей жизнью.",
        "Физика XX века уже однажды подорвала наивную уверенность в том, что мир представляет собой полностью готовую, заранее данную и совершенно независимую от наблюдения картину. Квантовая теория не доказала, что человеческое сознание буквально создаёт Вселенную. Но она поставила перед наукой и философией вопрос наблюдателя, проблему измерения и перехода от множества квантовых возможностей к устойчивой классической реальности. И именно в этом разломе возникло новое культурное пространство, где человек всё чаще мыслится не только как наблюдатель уже данного, но и как участник отбора, оформления и реализации переживаемой реальности.",
        "До эпохи ИИ человек мог определять себя через превосходство в обработке информации. Он был существом, которое лучше считает, лучше помнит, лучше связывает данные в смысл. Сегодня это основание быстро размывается. Искусственный интеллект показывает, что многие формы интеллектуальной деятельности являются воспроизводимыми. Он снимает с человека монополию на ряд когнитивных и креативных функций. Но вместе с этим он обнажает нечто более глубокое: интеллект сам по себе ещё не гарантирует ни свободы, ни зрелости, ни внутреннего суверенитета.",
        "Чем совершеннее становятся системы предсказания, персонализации и автоматизации, тем острее становится риск утраты субъектности. Когда внешняя система всё лучше знает, что человек, вероятно, выберет, купит, почувствует, на что откликнется и куда направит внимание, возникает новая форма зависимости — не обязательно через принуждение, а через удобство. Цифровая среда всё активнее предлагает готовые траектории выбора и всё мягче превращает внимание в инфраструктуру контроля. Это делает вопрос о сознании не роскошью философии, а практическим условием свободы.",
        "В этом месте становится особенно важной идея, которую долго было принято считать слишком метафизической для серьёзного разговора: возможно, человек живёт не в полностью фиксированной реальности, а в пространстве возможностей, из которых постоянно актуализирует одну линию. В грубой форме эта мысль действительно не выдерживает критики. Но у неё есть и более тонкое прочтение. Человек участвует в выборе своей реальности хотя бы на уровне феноменологии жизни: внимание меняет переживание, ожидание меняет интерпретацию, вера задаёт рамку допустимого, эмоциональный тон влияет на спектр доступных действий, а ценности фильтруют будущее.",
        "На этом уровне реальность никогда не является для человека просто данностью. Она всегда ещё и результат селекции: из множества возможностей он непрерывно воплощает те, которые соответствуют его состоянию, способу восприятия, готовности действовать и глубине ответственности. Именно здесь появляется тема выбора реальности — не как доказанного физического механизма, а как мощной междисциплинарной модели, связывающей квантовую неопределённость, человеческое восприятие, субъектность и цивилизационный выбор.",
        "Здесь необходимо провести главную границу. Есть физика, есть феноменология и есть метафизика. Физика исследует вероятности, измерение, корреляции и условия появления классической объективности. Феноменология исследует то, как человек реально переживает мир: как внимание, память, ожидание, страх, доверие и смысл структурируют опыт. Метафизика делает следующий шаг и утверждает, что сознание в каком-то глубоком смысле со-творяет саму реальность. Ошибка начинается тогда, когда один уровень выдают за другой. Но и обратная ошибка не менее опасна — редуцировать человека до реактивной биомашины только потому, что наука пока не имеет полного языка для описания сознательного участия в реальности.",
        "Сегодня особенно важно научиться удерживать одновременно интеллектуальную честность и антропологическую глубину. Не выдавать метафору за эксперимент. Но и не отрицать, что у человечества возникла новая историческая потребность в языке, который смог бы описать сознание как нечто большее, чем побочный эффект нейронной обработки. Эта потребность обострилась именно сейчас, потому что эпоха ИИ возвращает вопрос не о мощности, а о носителе мощности.",
        "Если системы могут становиться всё умнее, то будущая судьба цивилизации будет определяться уже не только тем, насколько развит интеллект, но и тем, кто им пользуется и из какого состояния. Изобилие само по себе не создаёт зрелого человека. Автоматизация сама по себе не рождает свободу. Даже децентрализация технологий не гарантирует внутренней независимости, если человек остаётся существом внешней причинности, которое легко отдаёт своё внимание, свою волю и своё право на выбор более удобной системе.",
        "Поэтому в центре будущего оказывается не просто интеллект, а качество сознания. Под качеством сознания здесь следует понимать не мистическую частоту, а степень внутренней собранности человека, его способность не распадаться на хаотические импульсы, выдерживать неопределённость без бегства в готовые ответы, различать, чем управляется его внимание, выбирать не только эффективное, но и ценное, и не подменять свободу комфортом.",
        "Именно поэтому в серьёзный разговор о будущем всё настойчивее возвращаются темы, долго вытесненные на периферию как слишком мягкие: любовь, внимание, ответственность, внутреннее достоинство, цельность. Любовь в этом контексте — не сентимент и не частная эмоция, а особый принцип организации сознания, при котором исчезает внутренний раскол между знанием, действием и ценностью. Это состояние, в котором человек перестаёт быть жертвой обстоятельств и становится носителем внутренней причинности, способной менять реальность.",
        "Научная статья не обязана принимать такую метафизику буквально. Но она обязана заметить сам факт её возвращения. В мире, где интеллект перестаёт быть достаточным критерием человеческого, цивилизация ищет новое определение человека. И всё больше признаков того, что это определение будет строиться вокруг осознанности, а не только когниции; вокруг сознания, а не только вычисления; вокруг сотворения реальности, а не только её описания.",
        "В этом смысле главный вызов, который ставит перед нами искусственный интеллект, не технологический. Он антропологический. Вопрос не в том, сможет ли ИИ когда-нибудь думать лучше нас. Вопрос в том, кем станет человек в мире, где одного мышления уже недостаточно, чтобы быть человеком. Возможно, будущее будет зависеть не столько от того, насколько совершенными станут наши системы, сколько от того, насколько зрелым станет носитель этих систем. Не столько от интеллекта, сколько от сознания.",
        "И тогда самый важный вопрос XXI века звучит так: не можно ли смоделировать реальность, а способно ли человечество стать достойным сознательного участия в ней.",
      ],
      thesesLabel: "Ключевые тезисы",
      thesisPrefix: "Тезис",
      theses: [
        "ИИ лишает человека монополии на обработку информации, но не на сознание.",
        "Квантовая теория не доказывает духовные модели мира, но делает вопрос о наблюдателе исторически неизбежным.",
        "Реальность человека — не только данность, но и результат селекции внимания, смысла, ценностей и выборов.",
        "Изобилие без осознанности не освобождает: оно может превратиться в новую форму зависимости.",
        "Будущее цивилизации зависит не только от интеллекта систем, но и от зрелости носителя этой мощности.",
        "Любовь — не сентимент, а принцип интеграции сознания, при котором человек перестаёт быть жертвой и становится причиной.",
      ],
      futureLabel: "Следующие выпуски",
      futureBadge: "В работе",
      futureIssues: [
        {
          title: "После ИИ: новая антропология человека",
          text: "Как меняется определение человека в мире, где интеллект масштабируется, копируется и автоматизируется.",
        },
        {
          title: "Квантовая неопределённость и границы наблюдателя",
          text: "Где заканчивается физика, где начинается феноменология, и почему эта граница стала главным интеллектуальным разломом XXI века.",
        },
        {
          title: "Любовь как архитектура сознания",
          text: "Можно ли говорить о любви не как о чувстве, а как о высшем принципе организации внимания, воли и смысла.",
        },
        {
          title: "Изобилие, контроль и будущее свободы",
          text: "Почему технологический комфорт не гарантирует внутренней независимости — и как выглядит мягкий цифровой концлагерь.",
        },
        {
          title: "Технологическая сингулярность",
          text: "Как может выглядеть цивилизационный скачок, если центральной силой развития станет не мощность системы, а зрелость сознания.",
        },
        {
          title: "Новый Человек и конец старой эпохи",
          text: "Почему будущее зависит от перехода от внешней причинности к внутреннему состоянию.",
        },
        {
          title: "Мягкий тоталитаризм интерфейсов",
          text: "Как персонализация, удобство и предсказание формируют новые режимы незаметного управления.",
        },
        {
          title: "Предреальность: язык возможностей",
          text: "Можно ли создать научно честный язык для описания человеческого участия в выборе проживаемой линии жизни.",
        },
        {
          title: "Внимание как последняя валюта свободы",
          text: "Почему борьба за внимание становится глубже любой экономической модели.",
        },
        {
          title: "Журнал будущего после науки и против неё",
          text: "Как построить интеллектуальное издание, которое не упрощает науку и не боится предельных вопросов.",
        },
      ],
      aboutLabel: "Об издании",
      aboutTitle: "Журнал о новой картине будущего человека",
      aboutParagraphs: [
        "«Физика сознания» — авторское независимое онлайн-издание о будущем человека. Мы публикуем тексты о сознании, наблюдателе, свободе, любви, квантовой неопределённости, субъектности, цифровом контроле и цивилизационных сценариях развития мира.",
        "Это пространство для читателей, которым тесно в старой логике разделения на «строгую науку» и «внутренний опыт». Нас интересует язык, способный соединить глубину, ясность и интеллектуальную честность в одном цельном взгляде на человека XXI века.",
      ],
      langRu: "RU",
      langEn: "EN",
    },
    en: {
      brand: "PHYSICS OF CONSCIOUSNESS",
      subtitleTop: "Online Journal",
      subtitleBottom: "of the Future Human",
      sections: [
        { id: "cover", title: "Start" },
        { id: "editorial", title: "Editorial" },
        { id: "manifesto", title: "Manifesto" },
        { id: "feature", title: "Feature" },
        { id: "theses", title: "Theses" },
        { id: "future", title: "Archive" },
        { id: "about", title: "About" },
      ],
      issueBadge: "Issue 01",
      editorialTitle: "Why we are launching this journal now",
      editorialParagraphs: [
        "We live in a time when intelligence is no longer a sufficient definition of the human. AI can already generate texts, images, hypotheses, and strategies, and it is moving ever deeper into a space long considered the privilege of the human mind. That is why what we need today is not another media product about technology, but a publication capable of asking a more serious question: what remains human when thought is no longer our monopoly?",
        "Physics of Consciousness is a journal about a holistic vision of the human being and the world. It is about a mode of perception in which science, consciousness, technology, freedom, and the inner maturity of the human are revealed not as separate domains, but as a unified space of a new reality. We are not interested in ready-made answers, but in the birth of a new language for describing a future in which the human must once again become more than a function, an interface, or a reactive carrier of needs.",
      ],
      lineLabel: "Editorial Line",
      lineTitle:
        "Not to explain the world in an old language, but to create a new language for the future human.",
      lineText:
        "Here we publish texts at the intersection of science, philosophy of consciousness, ethics of technology, and a new anthropology. No simplification. No pseudo-scientific rhetoric. No fear of the big question.",
      manifestoLabel: "Manifesto",
      manifestoTitle:
        "Consciousness is not a topic on the periphery of the future. It is its source, its quality, and its measure.",
      manifestoParagraphs: [
        "We are interested in the human not as a function of a system, but as a bearer of freedom, meaning, love, and inner causality. Not as an adaptive element of a new era, but as a being capable of participating in its creation.",
        "We seek a language in which science, depth, responsibility, and wholeness no longer oppose one another. For us, the future begins where the human stops being a reaction and becomes a cause.",
      ],
      featureLabel: "Feature Article",
      featureAside:
        "An editorial text on consciousness, quantum uncertainty, AI, and the new anthropology of the future.",
      essayBadge: "Essay / Issue 01",
      featureTitle: "Beyond Intelligence: Why the Future Depends on Consciousness",
      featureParagraphs: [
        "The central question of the age of artificial intelligence is no longer whether AI can think. That question is rapidly losing its sharpness. AI already detects patterns, helps make decisions, and increasingly imitates many functions that until recently were considered exclusively the territory of the human. The real question now sounds different: is thinking alone enough to define the human being?",
        "This is not a technological turn, but an anthropological one. If intelligence can be modeled, scaled, and distributed across systems, then human uniqueness is not exhausted by computation. The center of gravity shifts into another domain — consciousness. Not consciousness as an abstract word, but consciousness as the capacity to direct attention, preserve inner wholeness, choose values, assume responsibility for perception and action, and ultimately participate in the formation of the reality a human later calls their life.",
        "Twentieth-century physics once already undermined the naive confidence that the world is a fully given, pre-formed picture entirely independent of observation. Quantum theory did not prove that human consciousness literally creates the Universe. But it did place before science and philosophy the question of the observer, the problem of measurement, and the transition from many quantum possibilities to stable classical reality. In that very fracture, a new cultural space emerged, where the human is increasingly thought of not only as an observer of what is already given, but as a participant in the selection, framing, and realization of lived reality.",
        "Before the age of AI, the human could define itself through superiority in information processing. It was the being that counted better, remembered better, and connected data into meaning better. Today that foundation is rapidly dissolving. Artificial intelligence shows that many forms of intellectual activity are reproducible. It strips the human of monopoly over a range of cognitive and creative functions. At the same time, it reveals something deeper: intelligence by itself still guarantees neither freedom, nor maturity, nor inner sovereignty.",
        "The more perfect predictive, personalized, and automated systems become, the sharper the risk of losing subjecthood. When an external system increasingly knows what a human will likely choose, buy, feel, respond to, and where attention will go, a new form of dependency arises — not necessarily through coercion, but through convenience. The digital environment increasingly offers ready-made trajectories of choice and more softly turns attention into an infrastructure of control. This makes the question of consciousness not a luxury of philosophy, but a practical condition of freedom.",
        "At this point, an idea long considered too metaphysical for serious discussion becomes especially important: perhaps the human does not live in a fully fixed reality, but in a space of possibilities from which one line is constantly actualized. In a crude form, that thought indeed does not withstand criticism. But it also has a subtler reading. The human participates in choosing reality at least at the level of the phenomenology of life: attention changes experience, expectation changes interpretation, belief sets the frame of the possible, emotional tone affects the spectrum of available actions, and values filter the future.",
        "At this level, reality is never simply a given for the human. It is also the result of selection: out of many possibilities, one continuously embodies those that correspond to one’s state, mode of perception, readiness to act, and depth of responsibility. This is where the theme of reality selection appears — not as a proven physical mechanism, but as a powerful interdisciplinary model connecting quantum uncertainty, human perception, subjecthood, and civilizational choice.",
        "At this point, one must draw the main distinction. There is physics, there is phenomenology, and there is metaphysics. Physics studies probabilities, measurement, correlations, and the conditions for the emergence of classical objectivity. Phenomenology studies how the human actually experiences the world: how attention, memory, expectation, fear, trust, and meaning structure experience. Metaphysics takes the next step and claims that consciousness, in some deeper sense, co-creates reality itself. The error begins when one level is presented as another. Yet the opposite error is no less dangerous — reducing the human to a reactive biomachine simply because science does not yet possess a complete language for describing conscious participation in reality.",
        "Today it is especially important to hold intellectual honesty and anthropological depth together. Not to present metaphor as experiment. But also not to deny that humanity has developed a new historical need for a language able to describe consciousness as something more than a byproduct of neural processing. This need has sharpened precisely now, because the age of AI returns us not to the question of power, but to the bearer of power.",
        "If systems can become ever more intelligent, then the future fate of civilization will be determined not only by how developed intelligence is, but by who uses it and from what state of being. Abundance by itself does not create a mature human. Automation by itself does not generate freedom. Even the decentralization of technology does not guarantee inner independence if the human remains a being of external causality, easily handing over attention, will, and the right to choose to a more convenient system.",
        "That is why the center of the future is not intelligence alone, but the quality of consciousness. By quality of consciousness one should understand not some mystical frequency, but the degree of inner gatheredness of the human: the capacity not to fall apart into chaotic impulses, to endure uncertainty without fleeing into ready-made answers, to discern what governs attention, to choose not only the efficient but also the valuable, and not to exchange freedom for comfort.",
        "That is why themes long pushed to the periphery as too soft return ever more insistently into serious conversation about the future: love, attention, responsibility, inner dignity, wholeness. Love in this context is not sentiment and not a private emotion, but a special principle of organizing consciousness in which the inner split between knowledge, action, and value disappears. It is a state in which the human ceases to be a victim of circumstances and becomes the bearer of inner causality capable of changing reality.",
        "A scientific article is not obliged to take such metaphysics literally. But it is obliged to notice the very fact of its return. In a world where intelligence is no longer a sufficient criterion of the human, civilization is searching for a new definition of the human. And there are more and more signs that this definition will be built around awareness rather than cognition alone; around consciousness rather than computation; around the co-creation of reality rather than its mere description.",
        "In that sense, the main challenge posed to us by artificial intelligence is not technological. It is anthropological. The question is not whether AI will someday think better than we do. The question is what kind of being the human will become in a world where thinking alone is no longer enough to be human. Perhaps the future will depend not so much on how perfect our systems become, but on how mature the bearer of those systems becomes. Not so much on intelligence, as on consciousness.",
        "And then the most important question of the twenty-first century sounds like this: not whether reality can be modeled, but whether humanity can become worthy of conscious participation in it.",
      ],
      thesesLabel: "Key Theses",
      thesisPrefix: "Thesis",
      theses: [
        "AI deprives the human of a monopoly on information processing, but not on consciousness.",
        "Quantum theory does not prove spiritual models of the world, but it makes the question of the observer historically unavoidable.",
        "Human reality is not only a given, but also the result of the selection of attention, meaning, values, and choices.",
        "Abundance without awareness does not liberate: it can turn into a new form of dependency.",
        "The future of civilization depends not only on the intelligence of systems, but on the maturity of the bearer of that power.",
        "Love is not sentiment, but a principle of integration of consciousness, through which the human ceases to be a victim and becomes a cause.",
      ],
      futureLabel: "Upcoming Issues",
      futureBadge: "In Progress",
      futureIssues: [
        {
          title: "After AI: A New Anthropology of the Human",
          text: "How the definition of the human changes in a world where intelligence is scaled, copied, and automated.",
        },
        {
          title: "Quantum Uncertainty and the Boundaries of the Observer",
          text: "Where physics ends, where phenomenology begins, and why that boundary has become the great intellectual fracture of the 21st century.",
        },
        {
          title: "Love as the Architecture of Consciousness",
          text: "Can love be discussed not as a feeling, but as the highest principle of organizing attention, will, and meaning?",
        },
        {
          title: "Abundance, Control, and the Future of Freedom",
          text: "Why technological comfort does not guarantee inner independence — and what a soft digital camp may look like.",
        },
        {
          title: "Technological Singularity",
          text: "What a civilizational leap might look like if the central force of development becomes not system power, but the maturity of consciousness.",
        },
        {
          title: "The New Human and the End of the Old Epoch",
          text: "Why the future depends on the transition from external causality to inner state.",
        },
        {
          title: "The Soft Totalitarianism of Interfaces",
          text: "How personalization, convenience, and prediction shape new regimes of invisible control.",
        },
        {
          title: "Pre-Reality: A Language of Possibilities",
          text: "Can we create a scientifically honest language for describing human participation in choosing the line of life one actually lives?",
        },
        {
          title: "Attention as the Final Currency of Freedom",
          text: "Why the struggle for attention is becoming deeper than any economic model.",
        },
        {
          title: "A Journal of the Future After Science and Against It",
          text: "How to build an intellectual publication that does not simplify science and is not afraid of ultimate questions.",
        },
      ],
      aboutLabel: "About",
      aboutTitle: "A Journal About a New Picture of the Future Human",
      aboutParagraphs: [
        "Physics of Consciousness is an independent online publication about the future of the human. We publish texts on consciousness, the observer, freedom, love, quantum uncertainty, subjecthood, digital control, and civilizational scenarios of world development.",
        "This is a space for readers who feel confined by the old logic of division between ‘strict science’ and ‘inner experience.’ We are interested in a language capable of uniting depth, clarity, and intellectual honesty in one integral vision of the human of the 21st century.",
      ],
      langRu: "RU",
      langEn: "EN",
    },
  };

  const current = content[language];
  const sections = current.sections;

  const seo = {
    ru: {
      title: "Физика сознания — онлайн-журнал будущего человека",
      description:
        "Авторское независимое онлайн-издание о будущем человека. Тексты о сознании, наблюдателе, свободе, любви, квантовой неопределённости и цивилизационных сценариях развития мира.",
      ogTitle: "Физика сознания",
      ogDescription:
        "Онлайн-журнал будущего человека: сознание, наблюдатель, свобода, любовь, квантовая неопределённость и новая картина мира.",
    },
    en: {
      title: "Physics of Consciousness — online journal of the future human",
      description:
        "An independent online publication about the future of the human. Essays on consciousness, the observer, freedom, love, quantum uncertainty, and civilizational futures.",
      ogTitle: "Physics of Consciousness",
      ogDescription:
        "Online journal of the future human: consciousness, the observer, freedom, love, quantum uncertainty, and a new picture of the world.",
    },
  };


  const getHeaderOffset = () => {
    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0;
    return headerHeight + 16;
  };

  useEffect(() => {
    const applyMeta = (selector, attr, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        if (attr === "name") element.setAttribute("name", selector.replace('meta[name="', '').replace('"]', ''));
        if (attr === "property") element.setAttribute("property", selector.replace('meta[property="', '').replace('"]', ''));
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    document.title = seo[language].title;
    applyMeta('meta[name="description"]', "name", seo[language].description);
    applyMeta('meta[property="og:title"]', "property", seo[language].ogTitle);
    applyMeta('meta[property="og:description"]', "property", seo[language].ogDescription);
    applyMeta('meta[property="og:type"]', "property", "website");
    applyMeta('meta[property="og:site_name"]', "property", seo[language].ogTitle);
    applyMeta('meta[name="twitter:card"]', "name", "summary_large_image");
    applyMeta('meta[name="twitter:title"]', "name", seo[language].ogTitle);
    applyMeta('meta[name="twitter:description"]', "name", seo[language].ogDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://physics-of-consciousness.org/");
  }, [language]);

  useEffect(() => {
    const ids = sections.map((section) => section.id);

    const updateActiveSection = () => {
      const headerOffset = getHeaderOffset();
      const probeY = window.scrollY + headerOffset + 24;

      if (window.scrollY < 80) {
        setActiveSection("cover");
        return;
      }

      let currentId = "cover";

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const top = element.offsetTop;
        if (probeY >= top) currentId = id;
      });

      setActiveSection(currentId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections, language]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeTab = tabRefs.current[activeSection];
    if (!container || !activeTab) return;

    if (window.innerWidth >= 768) return;

    const targetLeft = activeTab.offsetLeft - container.clientWidth / 2 + activeTab.clientWidth / 2;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const nextLeft = Math.max(0, Math.min(targetLeft, maxScroll));

    container.scrollTo({ left: nextLeft, behavior: "smooth" });
  }, [activeSection, language]);

  const scrollToSection = (id) => (event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = getHeaderOffset();
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(elementPosition - headerOffset, 0);

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 selection:bg-stone-200 selection:text-black">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_70%_12%,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.025),transparent_32%),linear-gradient(to_bottom,#050505,#0a0a0a_34%,#060606_68%,#040404)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.22),transparent)] [background-size:1200px_100%]" />
      </div>

      <header ref={headerRef} className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-4">
          <div className="flex items-start justify-between gap-4 md:items-center">
            <div className="min-w-0">
              <div className="text-[12px] uppercase tracking-[0.52em] text-stone-400 md:text-[14px] md:tracking-[0.58em]">
                {current.brand}
              </div>
              <div className="mt-2 text-[18px] leading-tight tracking-[0.16em] md:text-[30px] md:tracking-[0.16em]">
                {current.subtitleTop}
                <br />
                {current.subtitleBottom}
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
                {current.langRu}
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.2em] transition ${
                  language === "en" ? "bg-white/12 text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                {current.langEn}
              </button>
            </div>
          </div>

          <nav ref={tabsContainerRef} className="-mx-1 mt-4 overflow-x-auto pb-1 md:mx-0 md:overflow-visible md:pb-0">
            <div className="flex min-w-max gap-2.5 px-1 text-sm text-stone-300 md:min-w-0 md:flex-wrap md:gap-3.5 md:px-0 md:text-base">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    ref={(el) => {
                      if (el) tabRefs.current[section.id] = el;
                    }}
                    href={`#${section.id}`}
                    onClick={scrollToSection(section.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs leading-none transition focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-[0.98] md:px-4 md:py-2 md:text-base ${
                      isActive
                        ? "border-white/50 bg-white/12 text-white"
                        : "border-white/10 text-stone-300 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {section.title}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      <main id="cover" className="relative z-10 scroll-mt-36 md:scroll-mt-40">
        <section
          id="editorial"
          className="scroll-mt-28 mx-auto max-w-7xl px-6 pb-12 pt-14 md:scroll-mt-32 md:pb-20 md:pt-20"
        >
          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="h-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-8 shadow-2xl shadow-black/30 md:p-10">
                <div className="mb-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-300">
                  <span className="leading-tight">{current.issueBadge}</span>
                </div>

                <h1 className="max-w-5xl text-[32px] font-light leading-[0.95] tracking-[-0.04em] md:text-[52px] xl:text-[60px]">
                  {current.editorialTitle}
                </h1>

                <div className="mt-8 max-w-5xl space-y-6 text-lg leading-relaxed text-stone-300 md:text-xl">
                  {current.editorialParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-2xl shadow-black/30">
                  <div className="text-xs uppercase tracking-[0.3em] text-stone-400">{current.lineLabel}</div>
                  <div className="mt-4 text-[22px] leading-tight md:text-[24px]">{current.lineTitle}</div>
                  <div className="mt-6 text-sm leading-relaxed text-stone-300">{current.lineText}</div>
                </div>

                <div
                  id="manifesto"
                  className="scroll-mt-44 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] p-6 shadow-2xl shadow-black/20 md:scroll-mt-44"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-stone-400">{current.manifestoLabel}</div>
                  <div className="mt-4 text-[22px] leading-tight text-stone-100 md:text-[24px]">{current.manifestoTitle}</div>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-300">
                    {current.manifestoParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="scroll-mt-40 md:scroll-mt-44 mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="sticky top-28">
                <div className="text-xs uppercase tracking-[0.35em] text-stone-500">{current.featureLabel}</div>
                <div className="mt-4 text-sm leading-relaxed text-stone-400">{current.featureAside}</div>
              </div>
            </div>

            <article className="lg:col-span-9 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(10,10,10,0.92))] p-8 shadow-2xl shadow-black/40 md:p-12 xl:p-16">
              <div className="mx-auto max-w-4xl">
                <div className="text-sm uppercase tracking-[0.25em] text-stone-500">{current.essayBadge}</div>
                <h2 className="mt-4 text-[32px] font-light leading-[0.99] tracking-[-0.04em] md:text-[48px]">
                  {current.featureTitle}
                </h2>

                <div className="mt-10 space-y-6 text-lg leading-8 text-stone-200">
                  {current.featureParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="theses" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-12 md:scroll-mt-32 md:py-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.35em] text-stone-500">{current.thesesLabel}</div>
            </div>
            <div className="lg:col-span-9 grid gap-5 md:grid-cols-2">
              {current.theses.map((item, idx) => (
                <div
                  key={idx}
                  className="flex min-h-[180px] flex-col justify-between rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6"
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                    {current.thesisPrefix} {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-6 text-xl leading-snug text-stone-100">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="future" className="scroll-mt-40 md:scroll-mt-44 mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.35em] text-stone-500">{current.futureLabel}</div>
            </div>
            <div className="lg:col-span-9 grid gap-5 md:grid-cols-2">
              {current.futureIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(12,12,12,0.94))] p-7 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-sm uppercase tracking-[0.25em] text-stone-500">{current.futureBadge}</div>
                  <h3 className="mt-4 text-[22px] leading-tight md:text-[26px]">{issue.title}</h3>
                  <p className="mt-4 leading-relaxed text-stone-300">{issue.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 pb-24 pt-12 md:scroll-mt-32 md:pb-32 md:pt-16">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 md:p-14">
            <div className="grid items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="text-xs uppercase tracking-[0.35em] text-stone-500">{current.aboutLabel}</div>
                <h3 className="mt-4 text-[28px] font-light leading-tight md:text-[38px]">{current.aboutTitle}</h3>
              </div>
              <div className="grid gap-8 text-base leading-relaxed text-stone-300 md:grid-cols-2 md:text-lg lg:col-span-8">
                {current.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
