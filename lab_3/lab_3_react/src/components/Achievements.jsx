function Achievements() {
  return (
    <section className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition">
      
      <h2 className="text-cyan-400 text-xl font-semibold mb-4">
        Досягнення
      </h2>

      <ul className="space-y-2 text-slate-300 text-sm">
        <li className="hover:text-cyan-400 transition">
          • Участь у CTF-змаганнях
        </li>
        <li className="hover:text-cyan-400 transition">
          • Курс з мережевої безпеки
        </li>
        <li className="hover:text-cyan-400 transition">
          • Сертифікат Linux
        </li>
      </ul>

    </section>
  );
}

export default Achievements;