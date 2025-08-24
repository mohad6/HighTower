/**
 * description: This file contains the JavaScript code for the HighTowers website.
 *
 */
// This code handles the navigation menu toggle functionality and animations.
// Select DOM elements for menu button, navigation links, and menu icon.
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");
const navLinksItems = document.querySelectorAll("#nav-links a"); // Select all navigation items

// Toggle the navigation menu and change the menu icon when the menu button is clicked.

menuBtn.addEventListener("click", (e) => {
  //  Toggle the "open" class on the navigation links to show or hide the menu.
  //   Also, change the menu icon to a close icon when the menu is open, and back to a menu icon when closed.

  navLinks.classList.toggle("open");

  // Change the menu icon based on whether the menu is open or closed
  const isOpen = navLinks.classList.contains("open");
  menuIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

// Add event listeners to each navigation item to close the menu when an item is clicked.

navLinksItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Close the menu after clicking on a nav item
    navLinks.classList.remove("open");
    menuIcon.setAttribute("class", "fa-solid fa-bars");
  });
});

// Add an event listener to the window for the resize event
window.addEventListener("resize", (e) => {
  // If the window is resized to be wider than 768px, ensure the menu is closed
  if (window.innerWidth > 768) {
    navLinks.classList.remove("open");
    menuIcon.setAttribute("class", "fa-solid fa-bars");
  }
});

/**
 * description: This code dynamically updates the year in the footer of the webpage.
 * It selects the HTML element with the ID "dev-year" and sets its text content to the current year.
 * This ensures that the year displayed in the footer is always up-to-date without requiring manual changes.
 *
 */
const yearSpan = document.getElementById("dev-year");
const years = () => {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
};
yearSpan.addEventListener("DOMContentLoaded", years());

/**
 * description
 */
const animationslides = {
  origin: "bottom",
  distance: "50px",
  duration: "1000",
};
/**
 * description: This code uses the ScrollReveal library to create scroll animations for various elements on the webpage.
 * It defines a set of animation properties and applies them to different sections of the page, such as images, text, and cards.
 * The animations include sliding in from different directions and adding delays for a staggered effect.
 *
 */
ScrollReveal().reveal(".hero-image img", {
  ...animationslides,
  origin: "right",
});
ScrollReveal().reveal(".hero-content p", {
  ...animationslides,
  delay: 500,
});
ScrollReveal().reveal(".hero-content .hero-title", {
  ...animationslides,
  delay: 1000,
});
ScrollReveal().reveal(".hero-btn", {
  ...animationslides,
  delay: 1500,
});
ScrollReveal().reveal(".about-card, .achievement-card,.discovery-card", {
  ...animationslides,
  interval: 400,
});
ScrollReveal().reveal(".package-img", {
  ...animationslides,
  origin: "left",
});
ScrollReveal().reveal(".package-title", {
  ...animationslides,
  delay: 500,
});
ScrollReveal().reveal(".package-description", {
  ...animationslides,
  delay: 1000,
});
ScrollReveal().reveal(".package-btn", {
  ...animationslides,
  delay: 1500,
});

/**
 * description: This code initializes a Swiper instance for a responsive image slider.
 */
const swiper = new Swiper(".slides.main", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});


