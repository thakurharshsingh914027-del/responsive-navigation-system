// Select elements
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add click event listener to the hamburger button
mobileToggle.addEventListener('click', () => {
    // Toggle the 'active' class on both the menu and the button
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Optional: Close menu when a link is clicked (useful for single-page sites)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});