

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) {
    alert("ID tidak ketemu");
    return;
  }

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});


// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// product hover animations
const productCards = document.querySelectorAll(".product-card");
productCards.forEach(card => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});


