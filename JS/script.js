// Comprobar las respuestas
document.getElementById("comprobar").addEventListener("click", function() {

    let puntaje = 0;

    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');
    let p3 = document.querySelector('input[name="p3"]:checked');
    let p4 = document.querySelector('input[name="p4"]:checked');
    let p5 = document.querySelector('input[name="p5"]:checked');

    // Comprobar que todas las preguntas estén respondidas
    if (!p1 || !p2 || !p3 || !p4 || !p5) {
        document.getElementById("resultado").innerHTML =
            "Tenés que responder todas las preguntas.";
        return;
    }

    // Respuestas correctas
    if (p1.value === "b") puntaje++;
    if (p2.value === "a") puntaje++;
    if (p3.value === "b") puntaje++;
    if (p4.value === "a") puntaje++;
    if (p5.value === "b") puntaje++;

    let mensaje = "<h3>Resultado: " + puntaje + "/5 puntos</h3>";

    if (puntaje === 5) {
        mensaje += "¡Excelente! Respondiste todas correctamente.";
    } else if (puntaje >= 3) {
        mensaje += "¡Buen trabajo! Conocés bastante sobre Glicerio.";
    } else {
        mensaje += "¡Seguí aprendiendo sobre su vida e historia!";
    }

    document.getElementById("resultado").innerHTML = mensaje;

});

// Reiniciar el cuestionario
document.getElementById("reiniciar").addEventListener("click", function() {

    let opciones = document.querySelectorAll('input[type="radio"]');

    for (let opcion of opciones) {
        opcion.checked = false;
    }

    document.getElementById("resultado").innerHTML = "";

});
