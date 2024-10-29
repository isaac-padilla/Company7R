// Ciclo automático de imágenes en el banner y control de botones
let bannerIndex = 0;
const banners = document.querySelectorAll(".banner img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Función para mostrar el banner actual
function showBanner(index) {
    banners.forEach((img, i) => {
        img.style.display = (i === index) ? "block" : "none";
    });
}

// Inicializa mostrando la primera imagen del banner
showBanner(bannerIndex);

// Cambia la imagen del banner cada 3 segundos
const bannerInterval = setInterval(function() {
    bannerIndex = (bannerIndex + 1) % banners.length;
    showBanner(bannerIndex);
}, 3000);

// Función para detener el ciclo automático
function stopBannerCycle() {
    clearInterval(bannerInterval);
}

// Eventos de los botones para cambiar la imagen manualmente
prevBtn.addEventListener("click", function() {
    stopBannerCycle(); // Detiene el ciclo automático al hacer clic
    bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
    showBanner(bannerIndex);
});

nextBtn.addEventListener("click", function() {
    stopBannerCycle(); // Detiene el ciclo automático al hacer clic
    bannerIndex = (bannerIndex + 1) % banners.length;
    showBanner(bannerIndex);
});

// Efecto de cambio de color en el encabezado al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('header-scroll', window.scrollY > 50);
});

// Botón para desplazarse al pie de página
const scrollToFooterBtn = document.getElementById("scroll-to-footer");

scrollToFooterBtn.addEventListener("click", function() {
    document.getElementById("contacto-footer").scrollIntoView({ behavior: "smooth" });
});

