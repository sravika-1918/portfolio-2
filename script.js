// Typing effect
const text = "Hi, I'm P. Gayathri Sravika 👩‍💻";
let index = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Scroll pop effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll('.fade-in').forEach(section => {
  observer.observe(section);
});
