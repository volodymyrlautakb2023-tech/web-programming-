function Achievements({ theme }) {
  const card =
    theme === "dark"
      ? "bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition"
      : "bg-white border border-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition";

  const title = theme === "dark" ? "text-cyan-400" : "text-sky-600";
  const list = theme === "dark" ? "text-slate-300" : "text-slate-700";
  const hover = theme === "dark" ? "hover:text-cyan-400" : "hover:text-sky-600";

  return (
    <section className={card}>
      <h2 className={`${title} text-xl font-semibold mb-4`}>Досягнення</h2>

      <ul className={`space-y-2 ${list} text-sm`}>
        <li className={`${hover} transition`}>• Участь у CTF-змаганнях</li>
        <li className={`${hover} transition`}>• Курс з мережевої безпеки</li>
        <li className={`${hover} transition`}>• Сертифікат Linux</li>
      </ul>
    </section>
  );
}

export default Achievements;