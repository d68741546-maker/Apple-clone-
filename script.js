// Esperamos a que todo el HTML esté completamente estructurado en el navegador
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. INTERACTIVIDAD DEL MENÚ MÓVIL ---
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    // Creamos el botón del menú de forma dinámica
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Icono inicial de tres rayitas
    
    // Insertamos el botón al inicio del contenedor de navegación
    navContainer.insertBefore(menuToggle, navContainer.firstChild);

    // Escuchamos el clic en las rayitas para abrir o cerrar el menú
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Cambiamos el icono a una 'X' si el menú está abierto, o volvemos a las rayitas si se cierra
        if (navLinks.classList.contains('active')) {
            menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    // --- 2. CAMBIO DE ESTILO DEL NAVBAR CON EL SCROLL ---
    const appleNav = document.querySelector('.apple-nav');

    window.addEventListener('scroll', () => {
        // Si el usuario baja más de 50 píxeles, la barra se vuelve más oscura
        if (window.scrollY > 50) {
            appleNav.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
            appleNav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
        } else {
            // Si regresa al tope, recupera la transparencia original estilo vidrio esmerilado
            appleNav.style.backgroundColor = "rgba(22, 22, 23, 0.8)";
            appleNav.style.boxShadow = "none";
        }
    });

});