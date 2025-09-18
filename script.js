// Select the hamburger icon and mobile menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");

// Toggle the "open" class on the menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Initialize Lenis smooth scroll only on screens wider than 768px
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    const lenis = new Lenis({
      duration: 1.1, // scroll animation duration
      smooth: true, // enable smooth scrolling
    });

    // Animation frame loop for Lenis smooth scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
});

// Initialize AOS library for scroll animations
AOS.init({
  duration: 1000, // animation duration in milliseconds
  once: true, // animations happen only once
});

// Preloader hide after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => (preloader.style.display = "none"), 500);
  }, 500);
});