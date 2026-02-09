/**
 * Lile Furniture — shared JS
 * Nav, mobile menu, footer year, form handling where needed
 */
(function () {
    'use strict';

    var navbar = document.getElementById('navbar');
    var navMenu = document.getElementById('navMenu');
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });

        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('open');
                navMenu.classList.remove('open');
            }
        });
    }

    // Set active nav link by current page
    var path = window.location.pathname;
    var page = path.split('/').pop() || 'index.html';
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href') || '';
        var linkPage = href.split('/').pop() || 'index.html';
        link.classList.toggle('active', linkPage === page || (page === '' && linkPage === 'index.html'));
    });

    // Footer year
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Reveal on scroll (optional)
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    }
})();
