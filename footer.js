// Inject footer with social links on all pages
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.createElement('div');
    footer.className = 'social-links footer';
    footer.innerHTML = `
        <a href="https://github.com/oliveira-caio" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
        <span class="social-separator">::</span>
        <a href="https://scholar.google.com/citations?user=5CIBNG0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="social-link">Google Scholar</a>
        <span class="social-separator">::</span>
        <a href="https://linkedin.com/in/caioliveira" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
    `;

    // Insert footer after main in the container
    const main = document.querySelector('main');
    if (main && main.parentNode) {
        main.parentNode.appendChild(footer);
    }
});
