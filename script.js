const menu = document.getElementById("menu");
const header = document.querySelector(".site-header");

menu.addEventListener("click", () => header.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => header.classList.remove("open"));
});

const topBtn = document.getElementById("top");
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
});
topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

if (window.matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
  });
}

const revealItems = document.querySelectorAll(".project, .stats div, .timeline article, .recognition-grid > div, .process-grid > div");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(item);
});
