import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("ru");

  const copy = {
    ru: {
      brand: "ФИЗИКА СОЗНАНИЯ",
      subtitle: "Онлайн-журнал будущего человека",
      title: "Почему мы запускаем этот журнал сейчас",
      text: "Мы живём в момент, когда интеллект перестаёт быть достаточным определением человека. ИИ уже умеет генерировать текст, изображение, гипотезы, стратегии и всё глубже входит в пространство, которое долго считалось привилегией человеческого ума.",
      buttonRu: "RU",
      buttonEn: "EN",
      issue: "Выпуск 01",
    },
    en: {
      brand: "PHYSICS OF CONSCIOUSNESS",
      subtitle: "Online Journal of the Future Human",
      title: "Why we are launching this journal now",
      text: "We live in a moment when intelligence is no longer a sufficient definition of the human. AI can already generate text, images, hypotheses, and strategies, and it is moving ever deeper into a space long considered the privilege of the human mind.",
      buttonRu: "RU",
      buttonEn: "EN",
      issue: "Issue 01",
    },
  };

  const current = copy[language];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#f5f5f4",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#a8a29e",
                }}
              >
                {current.brand}
              </div>
              <div style={{ marginTop: 8, fontSize: 24, lineHeight: 1.1 }}>
                {current.subtitle}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 9999,
                padding: 4,
                background: "rgba(255,255,255,0.04)",
                height: "fit-content",
              }}
            >
              <button
                onClick={() => setLanguage("ru")}
                style={{
                  border: "none",
                  borderRadius: 9999,
                  padding: "8px 12px",
                  background: language === "ru" ? "rgba(255,255,255,0.12)" : "transparent",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {current.buttonRu}
              </button>
              <button
                onClick={() => setLanguage("en")}
                style={{
                  border: "none",
                  borderRadius: 9999,
                  padding: "8px 12px",
                  background: language === "en" ? "rgba(255,255,255,0.12)" : "transparent",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {current.buttonEn}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}>
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 28,
            background: "rgba(255,255,255,0.04)",
            padding: 32,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 9999,
              padding: "8px 16px",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "#d6d3d1",
            }}
          >
            {current.issue}
          </div>

          <h1 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 300, marginTop: 24 }}>
            {current.title}
          </h1>

          <p
            style={{
              marginTop: 32,
              fontSize: 24,
              lineHeight: 1.6,
              color: "#d6d3d1",
              maxWidth: 900,
            }}
          >
            {current.text}
          </p>
        </section>
      </main>
    </div>
  );
}
