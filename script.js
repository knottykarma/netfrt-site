// 🌟 Splash screen fade-out on page load
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  splash.style.transition = 'opacity 0.8s ease';
  splash.style.opacity = 0;
  setTimeout(() => splash.style.display = 'none', 800);
});

// 📩 Handle general form submissions with confirmation
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (form.closest('#newsletter')) return; // Skip newsletter override
    alert("Thank you! We'll be in touch.");
  });
});

// 📰 Newsletter-specific feedback
const newsletterForm = document.querySelector('#newsletter form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for subscribing to NETFORT updates!');
  });
}

// 🖼️ Lightbox preview for gallery images
document.querySelectorAll('.lightbox-trigger').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// ❌ Close lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'none';
  lightboxImg.src = '';
}

// 💬 Chat widget interaction
const chatButton = document.querySelector('#chat-widget button');
if (chatButton) {
  chatButton.addEventListener('click', () => {
    alert('Live chat feature coming soon. Stay tuned!');
  });
}