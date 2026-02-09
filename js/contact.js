/**
 * Contact form — validation and submit
 */
(function () {
    var form = document.getElementById('contactForm');
    var errorEl = document.getElementById('formError');

    if (!form || !errorEl) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = form.querySelector('#contact-name');
        var email = form.querySelector('#contact-email');
        var message = form.querySelector('#contact-message');

        var valid =
            name && name.value.trim().length > 1 &&
            message && message.value.trim().length > 4 &&
            email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

        if (!valid) {
            errorEl.classList.add('visible');
            return;
        }

        errorEl.classList.remove('visible');
        form.reset();
        alert('Thank you. Your message has been sent. We will get back to you soon.');
    });
})();
