export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">

      {/* HEADER */}
      <header className="text-center py-16 border-b border-slate-800">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          Володимир Лаута
        </h1>
        <p className="text-slate-400 mt-3">
          Телефон: 380657625455 | Email: v.laauta.student@gmail.com | Львів
        </p>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-[320px_1fr] gap-8">

        {/* SIDEBAR */}
        <aside className="bg-slate-800 p-6 rounded-2xl shadow-lg space-y-6">
          <div>
            <h2 className="text-cyan-400 font-semibold mb-3">Освіта</h2>
            <p className="font-semibold">Львівська Політехніка</p>
            <p className="text-slate-400">Кібербезпека</p>
            <p className="text-slate-500 text-sm">2023 – теперішній час</p>
          </div>

          <div>
            <h2 className="text-cyan-400 font-semibold mb-3">Досягнення</h2>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Участь у CTF-змаганнях</li>
              <li>• Курс з мережевої безпеки</li>
              <li>• Сертифікат Linux</li>
            </ul>
          </div>
        </aside>

        {/* CONTENT */}
        <section className="space-y-8">

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition">
            <h2 className="text-cyan-400 text-xl mb-4">Мета</h2>
            <p className="text-slate-300">
              Отримати позицію студента-практиканта у сфері кібербезпеки,
              де зможу застосувати знання з інформаційної безпеки,
              мережевих технологій та аналізу загроз.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition">
            <h2 className="text-cyan-400 text-xl mb-6">Досвід</h2>

            <div className="mb-6">
              <h3 className="font-semibold text-lg">IT Support Intern</h3>
              <p className="text-slate-400 text-sm mb-2">
                CyberTech Solutions | 06.2024 – 08.2024
              </p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Налаштування мереж</li>
                <li>• Моніторинг безпеки</li>
                <li>• Аналіз логів</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Junior Security Analyst</h3>
              <p className="text-slate-400 text-sm mb-2">
                SecureNet Lab | 01.2025 – 03.2025
              </p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Аналіз вразливостей</li>
                <li>• Тестування на проникнення</li>
                <li>• Підготовка звітів</li>
              </ul>
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-slate-800 text-slate-500 text-sm">
        © 2026 Володимир Лаута
      </footer>

    </div>
  )
}