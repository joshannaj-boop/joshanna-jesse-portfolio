/**
 * Data: The navigation links
 * To add a new link, just add a new object to this array!
 */
const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about.html" },
    { name: "Education", url: "/education.html" },
    { name: "Clinical Experience", url: "/clinicalexperience.html" },
    { name: "Research", url: "/research.html" },
    { name: "Skills", url: "/skills.html" },
    { name: "Certifications", url: "/certificaitons.html" }, // Kept your specific filename spelling
    { name: "Leadership", url: "/leadership.html" },
    { name: "Contact", url: "/contact.html" }
];

function injectNavigator() {
    // 1. Create the container
    const navDiv = document.createElement('div');
    navDiv.className = 'navigator';

    // 2. Generate the HTML from the JSON array
    // We map over the array to create links, then join them with the pipe character
    const htmlContent = navLinks
    .map(link => `<a href="${link.url}">${link.name}</a>`)
    .join('<span class="separator"> | </span>');
    navDiv.innerHTML = htmlContent;

    // 3. Inject it at the very start of the body
    document.body.prepend(navDiv);
}

// Initialize when the page is ready
document.addEventListener('DOMContentLoaded', injectNavigator);