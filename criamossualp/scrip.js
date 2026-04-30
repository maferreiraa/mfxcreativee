function openWhatsApp() {
  // Evento para Google Analytics
  if (typeof gtag === "function") {
    gtag("event", "click_whatsapp", {
      event_category: "engagement",
      event_label: "botao_lp_mfx"
    });
  }

  const number = "5534984187265";
  const message = "Oi! Vi sua página e quero entender como funciona a landing page 🙂";
  const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

function startCountdown() {
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!hoursEl || !minutesEl || !secondsEl) return;

  const now = new Date();
  const end = new Date();

  end.setHours(23, 59, 59, 999);

  const diff = end - now;

  if (diff <= 0) {
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

startCountdown();
setInterval(startCountdown, 1000);
