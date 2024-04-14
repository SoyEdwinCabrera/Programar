function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascotas")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    alert("SELECCIONASTE TU MSCOTA")
}

window.addEventListener("load", iniciarJuego)