const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.menu-content__link').forEach((link) => {
                link.classList.toggle(
                    'menu-content__link_active',
                    getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.4,
});

document.querySelectorAll('.scroll').forEach(
    (section) => observer.observe(section),
);

document.querySelector('.menu-content').addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-content__link')) {
        event.preventDefault();

        window.scrollTo({
            top: document.getElementById(getId(event.target)).offsetTop,
            behavior: 'smooth',
        });
    }

});