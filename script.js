
document.addEventListener("DOMContentLoaded", () => {
    
    
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    
    
    navContainer.insertBefore(menuToggle, navContainer.firstChild);

    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        
        if (navLinks.classList.contains('active')) {
            menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    // --- 2. CAMBIO DE ESTILO DEL NAVBAR CON EL SCROLL ---
    const appleNav = document.querySelector('.apple-nav');

    window.addEventListener('scroll', () => {
        
        if (window.scrollY > 50) {
            appleNav.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
            appleNav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
        } else {
            
            appleNav.style.backgroundColor = "rgba(22, 22, 23, 0.8)";
            appleNav.style.boxShadow = "none";
        }
    });

});