"use strict";

let numeroRandom = document.querySelector("#captcha");
let boton = document.querySelector("#boton");
boton.addEventListener("click", validar);

function validar(){
    let valor = document.querySelector("#valorCaptcha").value;
    let mensaje = document.createAttribute("p");
    document.querySelector("#form").appendChild(mensaje);
    if (valor == numeroRandom.innerHTML){
        mensaje.innerHTML = "El captcha es correcto"
    } else {
        mensaje.innerHTML = "El captcha es incorrecto"
    }
}


function mostrarCaptcha(){
    let numero = Math.floor(Math.random()*100);
    numeroRandom.innerHTML = numero;
}
mostrarCaptcha();