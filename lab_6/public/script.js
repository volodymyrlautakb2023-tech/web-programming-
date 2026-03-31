// ===== 1) localStorage: userAgent + platform =====
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

if (reviewsEl) {
  fetch("https://jsonplaceholder.typicode.com/posts/9/comments")
    .then(r => r.json())
    .then(comments => {
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
      reviewsEl.innerHTML = "<p>Не вдалося завантажити відгуки.</p>";
    });
}

// ===== 3) Модальне вікно =====
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

if (modalOverlay && closeModalBtn) {
  setTimeout(openModal, 60000);

  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

// ===== 4) Day/Night =====
const themeBtn = document.getElementById("themeBtn");

function applyTheme(mode) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(mode);
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const hour = new Date().getHours();
  applyTheme(hour < 7 || hour >= 21 ? "dark" : "light");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

// ===== 5) ЛР6: Відправка на Express (/api/contact) =====
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMessage");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        successMsg.style.display = "block";
      } else {
        alert("Помилка відправки");
      }

    } catch (err) {
      alert("Помилка сервера");
    }
  });
}