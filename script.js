const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;

    mensaje.textContent = "Gracias, " + nombre +
        ". Te interesa el servicio de " + servicio + ".";

    formulario.reset();
});
