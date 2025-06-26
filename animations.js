// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
}

// Function to add visible class to elements
function handleScroll() {
    const sections = document.querySelectorAll('.about, .skills-section, .projects-section, .contact-section');
    const elements = document.querySelectorAll('.about-content, .about-image, .about-text, .skills-container, .skill-tags span, .projects-container, .project-card, .contact-container, .contact-info, .contact-form');

    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
}); 