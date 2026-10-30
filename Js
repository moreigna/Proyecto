let puntaje = 0;

// Funcion para comprobar las respuestas
function responder(esCorrecta, numeroPregunta) {

    if (esCorrecta) {
        puntaje++;
        alert("¡Correcto!");
    } else {
        alert("Respuesta incorrecta. ¡Seguimos!");
    }

    document.getElementById("pregunta" + numeroPregunta).style.display = "none";

    if (numeroPregunta < 5) {
        document.getElementById("pregunta" + (numeroPregunta + 1)).style.display = "block";
    } else {
        document.getElementById("resultadoFinal").style.display = "block";
        document.getElementById("puntajeFinal").textContent =
            "Obtuviste " + puntaje + " de 5 respuestas correctas.";
    }
}

// Pregunta 1
document.getElementById("p1a").addEventListener("click", function() {
    responder(false, 1);
});

document.getElementById("p1b").addEventListener("click", function() {
    responder(true, 1);
});

document.getElementById("p1c").addEventListener("click", function() {
    responder(false, 1);
});

// Pregunta 2
document.getElementById("p2a").addEventListener("click", function() {
    responder(true, 2);
});

document.getElementById("p2b").addEventListener("click", function() {
    responder(false, 2);
});

document.getElementById("p2c").addEventListener("click", function() {
    responder(false, 2);
});

// Pregunta 3
document.getElementById("p3a").addEventListener("click", function() {
    responder(false, 3);
});

document.getElementById("p3b").addEventListener("click", function() {
    responder(false, 3);
});

document.getElementById("p3c").addEventListener("click", function() {
    responder(true, 3);
});

// Pregunta 4
document.getElementById("p4a").addEventListener("click", function() {
    responder(true, 4);
});

document.getElementById("p4b").addEventListener("click", function() {
    responder(false, 4);
});

document.getElementById("p4c").addEventListener("click", function() {
    responder(false, 4);
});

// Pregunta 5
document.getElementById("p5a").addEventListener("click", function() {
    responder(false, 5);
});

document.getElementById("p5b").addEventListener("click", function() {
    responder(true, 5);
});

document.getElementById("p5c").addEventListener("click", function() {
    responder(false, 5);
});

// Reiniciar el cuestionario
document.getElementById("reiniciar").addEventListener("click", function() {

    puntaje = 0;

    document.getElementById("resultadoFinal").style.display = "none";
    document.getElementById("pregunta1").style.display = "block";
});
