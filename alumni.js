const sections = document.querySelectorAll('.hero');

sections.forEach((section) => {
  const heroText = section.querySelector('.hero-text');
  const heroImage = section.querySelector('.hero-image-inside-text');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroTop = section.offsetTop;

    if (scrollPosition >= heroTop - 200) {
      heroText.classList.add('animate');
      heroImage.classList.add('animate');
    }
  });
});