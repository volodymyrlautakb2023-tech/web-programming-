function Experience() {
  return (
    <section className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition">
      
      <h2 className="text-cyan-400 text-xl font-semibold mb-6">
        Досвід
      </h2>

      {/* Перша позиція */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg text-slate-100">
          IT Support Intern
        </h3>

        <ul className="mt-2 space-y-1 text-slate-300 text-sm">
          <li>• Налаштування мереж</li>
          <li>• Моніторинг систем</li>
        </ul>
      </div>

      {/* Друга позиція */}
      <div>
        <h3 className="font-semibold text-lg text-slate-100">
          Junior Security Analyst
        </h3>

        <ul className="mt-2 space-y-1 text-slate-300 text-sm">
          <li>• Аналіз вразливостей</li>
          <li>• Тестування на проникнення</li>
        </ul>
      </div>

    </section>
  );
}

export default Experience;