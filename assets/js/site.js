(() => {
    'use strict';

    const navToggle = document.querySelector('[data-nav-toggle]');
    const nav = document.querySelector('[data-site-nav]');
    navToggle?.addEventListener('click', () => {
        const open = navToggle.getAttribute('aria-expanded') !== 'true';
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (nav) nav.dataset.open = open ? 'true' : 'false';
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') {
            navToggle.setAttribute('aria-expanded', 'false');
            if (nav) nav.dataset.open = 'false';
            navToggle.focus();
        }
    });

    const message = document.querySelector('[data-contact-form] #message');
    const count = document.querySelector('[data-contact-form] [data-character-count]');
    if (message && count) count.textContent = `${message.value.length.toLocaleString()} / 1,500`;
})();