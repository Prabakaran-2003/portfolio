// Add a little animation or interactivity if needed
console.log("Portfolio site loaded.");
window.scrollTo({
  top: target.offsetTop - 60,
  behavior: "smooth"
});

// Example: Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
