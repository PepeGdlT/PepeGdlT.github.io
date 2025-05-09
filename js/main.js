document.addEventListener("DOMContentLoaded", function () {
  // Verifica que estamos en portfolio.html
  if (window.location.pathname.includes('portfolio.html')) {
    console.log("Portfolio.js cargado correctamente.");

    // Inicializa AOS (Animations on Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }

    // Ejemplo: animación de scroll suave para navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Puedes agregar aquí más scripts para portfolio.html
  } else {
    console.log("Main.js detectó que no está en portfolio.html → no se ejecuta nada.");
  }
});
