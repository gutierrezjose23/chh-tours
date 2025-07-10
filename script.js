document.addEventListener("DOMContentLoaded", function () {
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

      // ✅ Limpiar el formulario
      form.reset();
    });
  }
});
