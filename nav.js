window.onload = function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const body = document.body;

    // Scroll event with proper logic for adding/removing class
    window.addEventListener('scroll', debounce(function () {
        if (window.pageYOffset > 100 && !header.classList.contains('is-scrolling')) {
            header.classList.add('is-scrolling');
        } else if (window.pageYOffset <= 100 && header.classList.contains('is-scrolling')) {
            header.classList.remove('is-scrolling');
        }
    }, 100)); // Increased debounce time for better user experience

    // Mobile menu toggle
    menu_btn.addEventListener('click', function () {
        toggleMenu();
    });

    // Close mobile menu on link click
    mobile_menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // Window resize event to handle menu reset
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && menu_btn.classList.contains('is-active')) {
            closeMenu(); // Reset menu on desktop
        }
    });

    // Functions to handle menu toggling
    function toggleMenu() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        body.classList.toggle('no-scroll');
    }

    function closeMenu() {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
        body.classList.remove('no-scroll');
    }
}

// Debounce function
function debounce(func, wait = 100) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
