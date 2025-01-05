// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark');
        themeToggle.checked = false;
    }
}

// Detect system theme
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check saved theme in localStorage or fallback to system theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(systemTheme.matches ? 'dark' : 'light');
}

// Listen for manual theme toggle
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Listen for system theme changes in real time
systemTheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only auto-switch if no manual override
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// FAQ Accordion
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.querySelector('h2').addEventListener('click', () => {
        faq.classList.toggle('open');
    });
});

// Social Icons Glow Effect
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const color = getComputedStyle(icon).backgroundColor;
        icon.style.boxShadow = `0 0 10px ${color}`;
        setTimeout(() => {
            icon.style.boxShadow = 'none';
        }, 500);
    });
});

// Back to Home Button
document.querySelector('.back-home').addEventListener('click', () => {
    window.location.href = 'https://aboutnabil.pages.dev/';
});