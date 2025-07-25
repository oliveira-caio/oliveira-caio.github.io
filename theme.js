/**
 * Theme management for personal website
 * Handles light/dark mode toggling with system preference detection
 */

// Check if we're running on file:// protocol
const isFileProtocol = window.location.protocol === 'file:';

// Fallback storage for file:// protocol
const ThemeStorage = {
    get: function (key) {
        if (isFileProtocol) {
            // For file:// protocol, try cookies as fallback
            return this.getCookie(key);
        }
        return localStorage.getItem(key);
    },

    set: function (key, value) {
        if (isFileProtocol) {
            // For file:// protocol, use cookies
            this.setCookie(key, value);
        } else {
            localStorage.setItem(key, value);
        }
    },

    setCookie: function (name, value) {
        document.cookie = `${name}=${value}; path=/; max-age=31536000`; // 1 year
    },

    getCookie: function (name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
};

// Apply theme immediately to prevent flash
(function () {
    const savedTheme = ThemeStorage.get('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
})();

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.querySelector('.theme-toggle-icon.moon');
    const sunIcon = document.querySelector('.theme-toggle-icon.sun');

    // Function to detect system theme preference
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Apply theme to page
    function applyTheme(theme) {
        body.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        updateIcon(theme);
    }

    // Update icon display based on theme
    function updateIcon(theme) {
        if (!moonIcon || !sunIcon) return;

        if (theme === 'dark') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }

    // Set initial theme
    const savedTheme = ThemeStorage.get('theme');
    const initialTheme = savedTheme || getSystemTheme();
    applyTheme(initialTheme);

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Save theme preference
        ThemeStorage.set('theme', newTheme);
        console.log('Theme changed to:', newTheme, isFileProtocol ? '(using cookies)' : '(using localStorage)');

        // Apply to current page
        applyTheme(newTheme);

        // Trigger storage event for other pages/tabs (only works for localStorage)
        if (!isFileProtocol) {
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'theme',
                newValue: newTheme,
                oldValue: currentTheme
            }));
        }
    }

    // Add click event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for theme changes from other pages/tabs (only works with localStorage)
    if (!isFileProtocol) {
        window.addEventListener('storage', function (e) {
            if (e.key === 'theme' && e.newValue) {
                applyTheme(e.newValue);
            }
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!ThemeStorage.get('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
        }
    });
});
