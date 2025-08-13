document.addEventListener("DOMContentLoaded", () => {
  // Actualiza el año del footer automáticamente
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Ejemplo de interacción
  const btn = document.getElementById("actionBtn");
  const card = document.querySelector(".card");
  if (btn && card) {
    btn.addEventListener("click", () => {
      card.classList.toggle("highlight");
      alert("JavaScript funcionando ✅");
    });
  }
});
