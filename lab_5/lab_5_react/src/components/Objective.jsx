function Objective({ theme }) {
  const card =
    theme === "dark"
      ? "bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition"
      : "bg-white border border-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition";

  const title = theme === "dark" ? "text-cyan-400" : "text-sky-600";
  const text = theme === "dark" ? "text-slate-300" : "text-slate-700";

  return (
    <section className={card}>
      <h2 className={`${title} text-xl font-semibold mb-4`}>Мета</h2>

      <p className={`${text} leading-relaxed`}>
        Отримати позицію студента-практиканта у сфері кібербезпеки,
        де зможу застосувати знання з інформаційної безпеки.
      </p>
    </section>
  );
}

export default Objective;