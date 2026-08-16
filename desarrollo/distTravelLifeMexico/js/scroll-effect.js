// Life Travel México - Efectos de scroll

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');

    // Función para aplicar clases basadas en la posición de scroll
    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Comprobar al cargar la página
    checkScroll();

    // Comprobar al hacer scroll
    window.addEventListener('scroll', checkScroll);
});