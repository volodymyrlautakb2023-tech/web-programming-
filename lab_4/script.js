// ===== 1) localStorage: userAgent + platform у footer =====
localStorage.setItem("userAgent", navigator.userAgent);
localStorage.setItem("platform", navigator.platform);

const footerEl = document.getElementById("footer");
if (footerEl) {
  footerEl.insertAdjacentHTML(
    "beforeend",
    `<p class="sysinfo">
      Browser: ${localStorage.getItem("userAgent")}<br>
      Platform: ${localStorage.getItem("platform")}
    </p>`
  );
}

// ===== 2) Fetch comments (варіант 9 => postId = 9) =====
const reviewsEl = document.getElementById("reviews");

fetch("https://jsonplaceholder.typicode.com/posts/9/comments")
  .then(r => r.json())
  .then(comments => {
    if (!reviewsEl) return;
    reviewsEl.innerHTML = "";
    comments.forEach(c => {
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <h4>${c.name} <span class="review-email">(${c.email})</span></h4>
        <p>${c.body}</p>
      `;
      reviewsEl.appendChild(item);
    });
  })
  .catch(() => {
    if (reviewsEl) reviewsEl.innerHTML = "<p>Не вдалося завантажити відгуки.</p>";
  });

// ===== 3) Модальне вікно через 60 секунд =====
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");

function openModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.add("show");
  modalOverlay.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("show");
  modalOverlay.setAttribute("aria-hidden", "true");
}

setTimeout(openModal, 60000);

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (modalOverlay) modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ===== 4) Day/Night: авто + перемикач + localStorage =====
const themeBtn = document.getElementById("themeBtn");

function applyTheme(mode) {
  // mode: "dark" | "light"
  document.body.classList.remove("light", "dark");
  document.body.classList.add(mode);
  localStorage.setItem("theme", mode);
}

// Авто-вибір теми (якщо ще не збережено)
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const hour = new Date().getHours();
  const autoMode = (hour < 7 || hour >= 21) ? "dark" : "light";
  applyTheme(autoMode);
}

// Ручне перемикання
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}