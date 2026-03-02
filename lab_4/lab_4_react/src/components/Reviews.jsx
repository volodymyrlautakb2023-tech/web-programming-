import { useEffect, useState } from "react";

function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/9/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const title = theme === "dark" ? "text-cyan-400" : "text-sky-600";

  const itemBox =
    theme === "dark"
      ? "p-4 rounded-xl border border-slate-700 bg-slate-800"
      : "p-4 rounded-xl border border-slate-200 bg-white";

  const email = theme === "dark" ? "text-slate-400" : "text-slate-500";
  const body = theme === "dark" ? "text-slate-300" : "text-slate-700";
  const load = theme === "dark" ? "text-slate-400" : "text-slate-600";

  return (
    <section className="space-y-4">
      <h2 className={`${title} text-xl font-semibold`}>Відгуки</h2>

      {loading && <p className={load}>Завантаження...</p>}

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className={itemBox}>
            <h4 className="font-medium">
              {c.name}
              <span className={`${email} text-sm`}> ({c.email})</span>
            </h4>
            <p className={`${body} mt-2 text-sm`}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;