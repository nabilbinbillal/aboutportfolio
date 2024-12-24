// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Check the saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.checked = true;
}

// Toggle theme between light and dark
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

// FAQ Accordion
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const question = faq.querySelector('h2');
    question.addEventListener('click', () => {
        faq.classList.toggle('open');
    });
});

// Social Icons Glow Effect
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const color = getComputedStyle(icon).backgroundColor;
        icon.style.boxShadow = `0 0 10px ${color}`;
        
        // Reset glow after 0.5s to avoid permanent glow
        setTimeout(() => {
            icon.style.boxShadow = 'none';
        }, 500);
    });
});

// Back to Home Button
const backHomeButton = document.querySelector('.back-home');

if (backHomeButton) {
    backHomeButton.addEventListener('click', function () {
        window.location.href = 'https://nabilbinbillal.github.io';
    });
}
