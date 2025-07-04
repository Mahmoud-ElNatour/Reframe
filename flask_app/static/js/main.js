document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      alert('Language toggle clicked');
    });
  }

  const images = document.querySelectorAll('.hero-img');
  if (images.length) {
    let idx = 0;
    images[0].classList.add('active');
    setInterval(() => {
      images[idx].classList.remove('active');
      idx = (idx + 1) % images.length;
      images[idx].classList.add('active');
    }, 4000);
  }

  const collabBtn = document.getElementById('collab-btn');
  if (collabBtn) {
    collabBtn.addEventListener('click', () => {
      window.location.href = '/contact';
    });
  }
});
