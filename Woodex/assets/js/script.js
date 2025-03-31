'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", showElemOnScroll);



/**
 * product filter
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);
// Change Main Image on Click
function changeImage(img) {
  document.getElementById("mainImage").src = img.src;
}
// Function to update cart count in the header
function updateCartCount() {
let cartCount = localStorage.getItem("cartCount") || 0;
document.getElementById("cart-count").innerText = cartCount;
}

// Function to add an item to the cart
function addToCart() {
let cartCount = localStorage.getItem("cartCount") || 0;
cartCount = parseInt(cartCount) + 1; // Increase count by 1
localStorage.setItem("cartCount", cartCount); // Store in localStorage
updateCartCount(); // Update the UI
}

// Ensure cart count updates on page load
document.addEventListener("DOMContentLoaded", updateCartCount);


// 
// Function to change main image when clicking a thumbnail
function changeImage(element) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = element.src;
}

// Function to update cart count in the header
function updateCartCount() {
  let cartCount = localStorage.getItem("cartCount") || 0;
  document.querySelector(".fa-bag-shopping + .btn-badge").innerText = cartCount;
}

// Function to add an item to the cart
function addToCart() {
  let cartCount = localStorage.getItem("cartCount") || 0;
  cartCount = parseInt(cartCount) + 1; // Increase count by 1
  localStorage.setItem("cartCount", cartCount); // Store in localStorage
  updateCartCount(); // Update the UI
}

// Ensure cart count updates on page load
document.addEventListener("DOMContentLoaded", updateCartCount);

function removeFromCart() {
  let cartCount = localStorage.getItem("cartCount") || 0;
  cartCount = parseInt(cartCount) - 1; // Decrease count by 1
  if (cartCount < 0) cartCount = 0; // Prevent negative values
  localStorage.setItem("cartCount", cartCount); // Store in localStorage
  updateCartCount(); // Update the UI
}

// Ensure cart count updates on page load
document.addEventListener("DOMContentLoaded", updateCartCount);


//login
document.querySelector('.header-action-btn[aria-label="user"]').addEventListener('click', function () {
  window.location.href = "login.html"; // Redirects to the login page
});
