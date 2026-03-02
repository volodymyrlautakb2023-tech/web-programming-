function Education({ theme }) {
  const card =
    theme === "dark"
      ? "bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition"
      : "bg-white border border-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition";

  const title = theme === "dark" ? "text-cyan-400" : "text-sky-600";
  const mainText = theme === "dark" ? "text-slate-100" : "text-slate-900";
  const subText = theme === "dark" ? "text-slate-400" : "text-slate-600";
  const small = "text-slate-500 text-sm mt-1";

  return (
    <section className={card}>
      <h2 className={`${title} text-xl font-semibold mb-4`}>Освіта</h2>

      <p className={`font-semibold ${mainText}`}>Львівська Політехніка</p>
      <p className={subText}>Кібербезпека</p>
      <p className={small}>2023 – теперішній час</p>
    </section>
  );
}

export default Education;