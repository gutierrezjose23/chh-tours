document.addEventListener("DOMContentLoaded", function () {
  /* ==========================================================
      1. FORMULARIO WHATSAPP (TU CÓDIGO ORIGINAL)
     ========================================================== */
  const form = document.getElementById("formulario");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return;
      }

      const numeroWhatsApp = "51960061120";
      const texto = `Hola, soy ${nombre}.%0AMi correo es: ${correo}.%0AMensaje:%0A${mensaje}`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

      window.open(url, "_blank");
      form.reset();
    });
  }

  /* ==========================================================
        2. MENÚ STICKY + EFECTO ENLACES (NEÓN / ENTRADA)
     ========================================================== */

  const header = document.getElementById("main-header");

  function toggleStickyHeader() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  }

  window.addEventListener("scroll", toggleStickyHeader);
  toggleStickyHeader();

  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link, i) => {
    // Animación de entrada suave
    link.style.opacity = "0";
    link.style.transform = "translateY(-10px)";
    link.style.transition = "0.4s ease";

    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, 150 * i);

    // Efecto neón al pasar el mouse
    link.addEventListener("mouseenter", () => {
      link.style.textShadow = "0 0 6px #ff4d4d, 0 0 14px #ff4d4d";
      link.style.transform = "scale(1.06)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.textShadow = "none";
      link.style.transform = "scale(1)";
    });
  });

  /* ==========================================================
        3. ANIMACIÓN DEL LOGO (imagen .logo)
     ========================================================== */

  const logo = document.querySelector(".logo");
  if (logo) {
    logo.classList.add("logo-glow");
  }

  /* ==========================================================
        4. EFECTO MÁQUINA DE ESCRIBIR EN EL HERO
     ========================================================== */

  function typeWriter(element, text, speed, callback) {
    element.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (typeof callback === "function") {
          setTimeout(callback, 300);
        }
      }
    }, speed);
  }

  const heroTitle = document.querySelector(".hero h2");
  const heroParagraph = document.querySelector(".hero p");

  if (heroTitle) {
    const originalTitle = heroTitle.textContent.trim();
    const originalParagraph = heroParagraph
      ? heroParagraph.textContent.trim()
      : "";

    heroTitle.textContent = "";
    if (heroParagraph) heroParagraph.textContent = "";

    typeWriter(heroTitle, originalTitle, 60, () => {
      if (heroParagraph) {
        typeWriter(heroParagraph, originalParagraph, 20);
      }
    });
  }

  /* ==========================================================
        5. EFECTO NEÓN Y ENTRADA PARA TÍTULOS (H2, H3)
     ========================================================== */

  const titles = document.querySelectorAll("h2, h3");
  titles.forEach((title) => {
    title.classList.add("neon-title", "hidden-on-scroll");
  });

  /* ==========================================================
        6. EFECTO SCROLL PARA SECCIONES Y TEXTOS
     ========================================================== */

const animatedElements = document.querySelectorAll(
  "p, li, .info, .nosotros, .historia, .mision-vision, .galeria, .contacto, .politica, .formulario-contacto, .redes-sociales, .mensaje-familia, .frases-motivadoras, .tabla-container, .celebration-container"
);


  animatedElements.forEach((el) => el.classList.add("hidden-on-scroll"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-on-scroll");
          } else {
            entry.target.classList.remove("show-on-scroll");
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.forEach((el) => observer.observe(el));
    titles.forEach((t) => observer.observe(t));
  } else {
    // Fallback simple si el navegador es muy viejo
    const showOnScroll = () => {
      [...animatedElements, ...titles].forEach((el) => {
        const box = el.getBoundingClientRect();
        if (box.top < window.innerHeight - 80) {
          el.classList.add("show-on-scroll");
        }
      });
    };
    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
  }

  /* ==========================================================
        7. PARTÍCULAS LUMINOSAS DE FONDO
     ========================================================== */

  const particlesContainer = document.createElement("div");
  particlesContainer.className = "particles-bg";
  document.body.appendChild(particlesContainer);

  const numParticles = 40;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const size = Math.random() * 4 + 2; // 2px a 6px
    const duration = Math.random() * 25 + 15; // 15s a 40s
    const delay = Math.random() * 10;
    const left = Math.random() * 100;

    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = left + "%";
    particle.style.animationDuration = duration + "s";
    particle.style.animationDelay = delay + "s";

    particlesContainer.appendChild(particle);
  }
});

/* 🎄 GENERADOR DE LUCES NAVIDEÑAS */
document.addEventListener("DOMContentLoaded", () => {
  const cont = document.getElementById("navidad");
  if (!cont) return;

  const cantidad = 35; // Número de luces (puedes subirlo)
  for (let i = 0; i < cantidad; i++) {
    const luz = document.createElement("div");
    luz.classList.add("luz");

    // posiciones
    luz.style.left = Math.random() * 100 + "%";
    
    // tamaños aleatorios
    const size = Math.random() * 5 + 3; 
    luz.style.width = size + "px";
    luz.style.height = size + "px";

    // duración de caída
    luz.style.animationDuration = Math.random() * 4 + 4 + "s";

    // retraso
    luz.style.animationDelay = Math.random() * 5 + "s";

    cont.appendChild(luz);
  }
  // ❄️ Generar copos de nieve adicionales
document.addEventListener("DOMContentLoaded", () => {
  const cantidadCopos = 40; // puedes subir o bajar esta cantidad

  for (let i = 0; i < cantidadCopos; i++) {
    const copo = document.createElement("div");
    copo.classList.add("copo-nieve");

    // Posición horizontal aleatoria
    copo.style.left = Math.random() * 100 + "vw";

    // Duración y delay aleatorio para que no caigan igual
    copo.style.animationDuration = 5 + Math.random() * 10 + "s";
    copo.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(copo);
  }
});

});
