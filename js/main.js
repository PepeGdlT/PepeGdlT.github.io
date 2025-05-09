document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => link.style.color = '#4CAF50');
        link.addEventListener('mouseout', () => link.style.color = '');
    });
});

document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registrado correctamente'))
    .catch(error => console.log('Error al registrar el Service Worker:', error));
}
