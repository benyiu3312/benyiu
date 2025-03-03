document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');

    // Toggle the navigation menu
    menuToggle.addEventListener('click', function(event) {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
    });

    // Close the navigation menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (navMenu.style.display === 'block' && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.style.display = 'none';
        }
    });

    // Close the navigation menu when clicking on the slider
    document.querySelector('.slider').addEventListener('click', function() {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        }
    });
});