"use strict";

window.addEventListener("load", () => {

  /* ===============================
     PRELOADER (SAFE VERSION)
     =============================== */
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }

});

/* ===============================
   DOM READY
   =============================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MOBILE NAV TOGGLE
     =============================== */
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".navmenu");

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-nav-active");
      mobileNavToggle.classList.toggle("bi-list");
      mobileNavToggle.classList.toggle("bi-x");
    });
  }

  /* ===============================
     SCROLL TO TOP BUTTON
     =============================== */
  const scrollTop = document.querySelector(".scroll-top");

  if (scrollTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTop.classList.add("active");
      } else {
        scrollTop.classList.remove("active");
      }
    });

    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ===============================
     AOS INIT (SAFE)
     =============================== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }

});
