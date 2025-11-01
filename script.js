document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    async function loadPage(pageName) {
        try {
            const response = await fetch(`pages/${pageName}.html`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            contentDiv.innerHTML = html;
        } catch (error) {
            console.error('Error loading page:', error);
            contentDiv.innerHTML = '<p>Error loading content.</p>';
        }
    }

    // Load home page by default
    loadPage('home');

    // Handle navigation clicks
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageName = event.target.hash.substring(1); // Remove '#' from hash
            loadPage(pageName);
        });
    });
});
