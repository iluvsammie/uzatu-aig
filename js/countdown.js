const targetDate =
  new Date("2026-08-29T18:00:00");

function updateTimer() {

  const now = new Date();

  const diff =
    targetDate - now;

  document.getElementById("days").textContent =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("hours").textContent =
    Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").textContent =
    Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("seconds").textContent =
    Math.floor((diff / 1000) % 60);
}

setInterval(updateTimer, 1000);
updateTimer();