document.addEventListener("DOMContentLoaded", () => {
  // Hide Loader Screen
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 800);
    }, 600);
  }


  initCountdown();
  createFallingHearts();
});

// Dynamic Slow Falling Heart Generator
function createFallingHearts() {
  const container = document.getElementById("heart-container");
  if (!container) return;

  const heartCount = 25;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "♥";

    // Randomize sizes (small and large)
    const size = Math.random() * 24 + 12; // 12px to 36px
    heart.style.fontSize = `${size}px`;

    // Randomize horizontal starting positions
    heart.style.left = `${Math.random() * 100}%`;

    // Low opacity (0.15 to 0.35)
    heart.style.opacity = (Math.random() * 0.2 + 0.15).toFixed(2);

    // Slow falling speeds (7s to 15s)
    const duration = Math.random() * 8 + 7;
    heart.style.animationDuration = `${duration}s`;

    // Stagger animation delays
    heart.style.animationDelay = `${Math.random() * 8}s`;

    container.appendChild(heart);
  }
}

// Interactive Envelope Opening Procedure
function openInvitation() {
  const wrapper = document.querySelector(".envelope-wrapper");
  const cover = document.getElementById("cover");
  const invitation = document.getElementById("invitation");
  const music = document.getElementById("music");

  // Step 1: Open envelope flap & slide letter up
  wrapper.classList.add("open");

  // Step 2: Slide cover up and display invitation
  setTimeout(() => {
    cover.style.transform = "translateY(-100%)";
    invitation.style.display = "block";
    
    setTimeout(() => {
      invitation.style.opacity = "1";
    }, 100);
  }, 700);

  // Step 3: Trigger background audio playback
  if (music) {
    music.play().catch(() => console.log("Audio playback blocked by browser policies."));
  }
}

// Countdown Engine
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

// Toggle Audio Playback
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