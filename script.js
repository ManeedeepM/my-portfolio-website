// Smooth scroll to top when logo is clicked
document.querySelector('.logo-css')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle (optional if you add a toggle switch)
const toggle = document.getElementById('theme-toggle');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact form submission alert
const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual submission
  alert("Thank you! Your message has been received.");
  form.reset(); // clear the form
});

// Typing animation for hero title (optional)
const typingText = "Welcome to My Portfolio";
const h1 = document.querySelector('.hero h1');
let index = 0;

function type() {
  if (h1 && index < typingText.length) {
    h1.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

if (h1) {
  h1.textContent = "";
  type();
}
