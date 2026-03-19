import { useEffect, useState } from "react";

function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const box =
    theme === "dark"
      ? "w-full max-w-md relative p-6 rounded-xl bg-slate-800 text-slate-100"
      : "w-full max-w-md relative p-6 rounded-xl bg-white text-slate-900";

  const input =
    theme === "dark"
      ? "w-full border p-2 rounded bg-slate-700 border-slate-600 text-slate-100"
      : "w-full border p-2 rounded bg-white border-slate-300 text-slate-900";

  const btn =
    theme === "dark"
      ? "w-full bg-cyan-500 text-slate-900 py-2 rounded font-medium"
      : "w-full bg-sky-600 text-white py-2 rounded font-medium";

  const close = theme === "dark" ? "text-slate-300" : "text-slate-500";
  const title = theme === "dark" ? "text-cyan-400" : "text-sky-600";

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className={box}>
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute top-2 right-3 text-xl ${close}`}
          type="button"
        >
          ×
        </button>

        <h2 className={`text-lg font-semibold mb-4 ${title}`}>
          Зворотній зв'язок
        </h2>

        <form action="https://formspree.io/f/mzdalzpn" method="POST" className="space-y-3">
          <input name="name" placeholder="Ім'я" required className={input} />
          <input name="email" type="email" placeholder="Email" required className={input} />
          <input name="phone" placeholder="Телефон" className={input} />
          <textarea name="message" rows="4" placeholder="Повідомлення" className={input} />
          <button type="submit" className={btn}>Відправити</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;