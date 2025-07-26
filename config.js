/**
 * Site configuration - Update these values to change across all pages
 */
window.SiteConfig = {
    // Personal information
    name: "Caio da Silva",
    title: "",

    // Navigation items
    navigation: {
        projects: "Projects",
        publications: "Publications",
        cv: "CV"
    },

    // Page titles
    pageTitles: {
        home: "Home :: Caio da Silva",
        projects: "Projects :: Caio da Silva",
        publications: "Publications :: Caio da Silva",
        cv: "CV :: Caio da Silva"
    },

    // Social links
    links: {
        github: "https://github.com/oliveira-caio",
        scholar: "https://scholar.google.com/citations?user=5CIBNG0AAAAJ&hl=en",
        linkedin: "https://linkedin.com/in/caioliveira"
    },

    // Auto-apply configuration when loaded
    apply: function () {
        // Update page title
        const pageKey = this.getPageKey();
        if (this.pageTitles[pageKey]) {
            document.title = this.pageTitles[pageKey];
        }

        // Update site name in header
        const siteNameEl = document.querySelector('h1 a');
        if (siteNameEl) {
            siteNameEl.textContent = this.name;
        }

        // Update navigation
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === 'projects.html' && this.navigation.projects) {
                link.textContent = this.navigation.projects;
            }
            if (href === 'publications.html' && this.navigation.publications) {
                link.textContent = this.navigation.publications;
            }
            if (href === 'cv.html' && this.navigation.cv) {
                link.textContent = this.navigation.cv;
            }
        });

        // Create social links dynamically (only on home page)
        if (this.getPageKey() === 'home') {
            this.updateSocialLinks();
        }
    },

    getPageKey: function () {
        const path = window.location.pathname;
        if (path.includes('projects')) return 'projects';
        if (path.includes('publications')) return 'publications';
        if (path.includes('cv')) return 'cv';
        return 'home';
    },

    updateSocialLinks: function () {
        // Update social links with URLs from config
        const socialLinks = document.querySelectorAll('.social-links .social-link');

        if (socialLinks.length >= 3) {
            // Update GitHub link
            socialLinks[0].href = this.links.github;

            // Update Google Scholar link  
            socialLinks[1].href = this.links.scholar;

            // Update LinkedIn link
            socialLinks[2].href = this.links.linkedin;
        }
    }
};

// Auto-apply when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    window.SiteConfig.apply();
});
