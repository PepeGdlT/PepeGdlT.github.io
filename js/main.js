document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => link.style.color = '#4CAF50');
        link.addEventListener('mouseout', () => link.style.color = '');
    });
});
