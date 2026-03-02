import { useEffect, useState } from "react";

function Footer({ theme }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("userAgent", navigator.userAgent);
    localStorage.setItem("platform", navigator.platform);

    const keys = Object.keys(localStorage).sort();
    setItems(keys.map((key) => ({ key, value: localStorage.getItem(key) })));
  }, []);

  const border = theme === "dark" ? "border-slate-800" : "border-slate-300";
  const text = theme === "dark" ? "text-slate-500" : "text-slate-600";
  const info = theme === "dark" ? "text-slate-400" : "text-slate-500";

  return (
    <footer className={`mt-12 py-8 border-t ${border} text-center text-sm`}>
      <p className={text}>© 2026 Володимир Лаута</p>

      <div className={`mt-4 space-y-1 text-xs ${info} break-all px-4`}>
        {items.map((item) => (
          <div key={item.key}>
            <strong>{item.key}:</strong> {item.value}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;