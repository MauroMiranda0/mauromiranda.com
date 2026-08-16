// Life Travel México - Menu Responsive Script

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos DOM
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.menu-open');
    const siteHeader = document.querySelector('.site-header');

    // Toggle para el menú móvil
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            siteHeader.classList.toggle('menu-open');

            // Cambiar el ícono del botón (asumiendo que usas FontAwesome u otro)
            const menuIcon = this.querySelector('i') || this;

            if (navMenu.classList.contains('active')) {
                // Si el menú está abierto, cambia el ícono a "X"
                if (menuIcon.classList) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times');
                } else {
                    // Si no hay ícono, cambia el texto
                    this.textContent = '✕';
                }
            } else {
                // Si el menú está cerrado, cambia el ícono a barras
                if (menuIcon.classList) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                } else {
                    // Si no hay ícono, cambia el texto
                    this.textContent = '☰';
                }
            }
        });
    }

    // Cierra el menú cuando se hace clic en un enlace (para mejorar UX en móvil)
    const navLinks = document.querySelectorAll('.menu-open a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Solo cierra si estamos en vista móvil
            if (window.innerWidth < 768) {
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');

                // Restaurar ícono original
                const menuIcon = mobileMenuToggle.querySelector('i') || mobileMenuToggle;
                if (menuIcon.classList) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                } else {
                    menuIcon.textContent = '☰';
                }
            }
        });
    });

    // Manejar cambios de tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            // En pantallas grandes, asegurarse de que el menú esté visible
            navMenu.classList.remove('active');
            siteHeader.classList.remove('menu-open');

            // Restaurar ícono original
            const menuIcon = mobileMenuToggle.querySelector('i') || mobileMenuToggle;
            if (menuIcon.classList) {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.textContent = '☰';
            }
        }
    });
});