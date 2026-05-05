// Inject header on all pages
document.addEventListener('DOMContentLoaded', function () {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="header-content">
            <h1><a href="index.html">Caio da Silva</a></h1>
            <nav>
                <ul>
                    <li><a href="cv.html" id="cv-link">CV</a></li>
                </ul>
                <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
                    <svg class="theme-toggle-icon moon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    <svg class="theme-toggle-icon sun" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                </button>
            </nav>
        </div>
    `;

    // Insert header at the beginning of container
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(header, container.firstChild);
    }

    // Mark active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'cv.html') {
        document.getElementById('cv-link').classList.add('active');
    }
});
