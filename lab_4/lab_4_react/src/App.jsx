import { useEffect, useState } from "react";

import Header from "./components/Header";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Objective from "./components/Objective";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  // Авто-тема по часу (07:00-21:00 light, інакше dark)
  useEffect(() => {
    const hour = new Date().getHours();
    const auto = hour >= 7 && hour < 21 ? "light" : "dark";
    setTheme(auto);
  }, []);

  const pageClass =
    theme === "dark"
      ? "min-h-screen bg-slate-900 text-slate-100 flex flex-col transition-colors"
      : "min-h-screen bg-slate-100 text-slate-900 flex flex-col transition-colors";

  return (
    <div className={pageClass}>
      <Header theme={theme} />

      <div className="text-center mt-4">
        <button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          className={
            theme === "dark"
              ? "px-4 py-2 rounded border border-slate-700"
              : "px-4 py-2 rounded border border-slate-300"
          }
          type="button"
        >
          Перемкнути тему
        </button>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-[320px_1fr] gap-8 flex-1">
        <aside className="space-y-8">
          <Education theme={theme} />
          <Achievements theme={theme} />
        </aside>

        <section className="space-y-8">
          <Objective theme={theme} />
          <Experience theme={theme} />
          <Reviews theme={theme} />
        </section>
      </main>

      <Footer theme={theme} />
      <ContactForm theme={theme} />
    </div>
  );
}

export default App;