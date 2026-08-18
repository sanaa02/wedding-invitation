document.addEventListener("DOMContentLoaded", () => {
  // Hide loader
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 800);
    }, 600);
  }
  
  initCountdown();
});

// Interactive Envelope Opening & Audio Start
function openInvitation() {
  const wrapper = document.querySelector(".envelope-wrapper");
  const cover = document.getElementById("cover");
  const invitation = document.getElementById("invitation");
  const music = document.getElementById("music");

  wrapper.classList.add("open");

  setTimeout(() => {
    cover.style.transform = "translateY(-100%)";
    invitation.style.display = "block";
    
    setTimeout(() => {
      invitation.style.opacity = "1";
    }, 100);
  }, 700);

  // Auto-play the background song when the envelope opens
  if (music) {
    music.play().catch(() => console.log("Audio play blocked by browser policies."));
  }
}

// Countdown Timer Engine
function initCountdown() {
  const target = new Date("August 29, 2026 18:00:00").getTime();

  const updateTimer = () => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff > 0) {
      document.getElementById("days").innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      document.getElementById("hours").innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      document.getElementById("mins").innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      document.getElementById("secs").innerText = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
    }
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Toggle Music Controls
function toggleMusic() {
  const music = document.getElementById("music");
  const btnIcon = document.querySelector(".music-btn i");

  if (music.paused) {
    music.play();
    btnIcon.className = "fa-solid fa-music";
  } else {
    music.pause();
    btnIcon.className = "fa-solid fa-volume-xmark";
  }
}