document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const menuClose = document.querySelector('.menu-close');

    // Open Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.add('active');
        });
    }

    // Close Menu (X Button)
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    }

    // Close Menu when clicking a link (Optional better UX)
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
});