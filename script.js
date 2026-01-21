window.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 50);
});