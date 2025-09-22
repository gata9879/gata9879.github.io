
botonImprimir.addEventListener("click", function() {
    window.print();
});

formulario.addEventListener("submit", function(event) {

    event.preventDefault();
    cargarDatos();
});

function cargarDatos() {
    
    const datos = {

        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        telefono: telefono.value,
        provincia: provincia.value,
        direccion: direccion.value,
        contraseña: contraseña.value,
        mensaje: mensaje.value,
    };

    console.log(datos);

    localStorage.setItem("datosFormulario", JSON.stringify(datos));

    alert("cargando datos...");

    alert("formulario enviado correctamente");

    formulario.reset();
}


