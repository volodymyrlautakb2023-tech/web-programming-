function Experience({ theme }) {
  const card =
    theme === "dark"
      ? "bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition"
      : "bg-white border border-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition";

  const title = theme === "dark" ? "text-cyan-400" : "text-sky-600";
  const h3 = theme === "dark" ? "text-slate-100" : "text-slate-900";
  const list = theme === "dark" ? "text-slate-300" : "text-slate-700";

  return (
    <section className={card}>
      <h2 className={`${title} text-xl font-semibold mb-6`}>Досвід</h2>

      <div className="mb-6">
        <h3 className={`font-semibold text-lg ${h3}`}>IT Support Intern</h3>
        <ul className={`mt-2 space-y-1 ${list} text-sm`}>
          <li>• Налаштування мереж</li>
          <li>• Моніторинг систем</li>
        </ul>
      </div>

      <div>
        <h3 className={`font-semibold text-lg ${h3}`}>Junior Security Analyst</h3>
        <ul className={`mt-2 space-y-1 ${list} text-sm`}>
          <li>• Аналіз вразливостей</li>
          <li>• Тестування на проникнення</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;