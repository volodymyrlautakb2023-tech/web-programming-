function Header({ theme }) {
  const headerClass =
    theme === "dark"
      ? "text-center py-16 border-b border-slate-800"
      : "text-center py-16 border-b border-slate-300";

  const pClass = theme === "dark" ? "text-slate-400 mt-4" : "text-slate-600 mt-4";

  return (
    <header className={headerClass}>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        Володимир Лаута
      </h1>

      <p className={pClass}>
        Телефон: 380657625455 | Email: v.laauta.student@gmail.com | Львів
      </p>
    </header>
  );
}

export default Header;