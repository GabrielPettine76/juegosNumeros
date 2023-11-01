let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroIngresado = document.getElementById("numeroIngresado");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos= 0;
function encontrarNumero(){
    intentos ++;
    intento.textContent = intentos;
    let numero = parseInt(numeroIngresado.value);
    if(numero < 1 || numero > 100 || isNaN(numero)){
        mensaje.textContent="El número ingresado es invalido debe estar entre 1 y 100";
        return
    }
    if (numero === numeroAzar){
        mensaje.textContent="Ganaste, acertaste el numero";
        mensaje.style.color="blue";
        return
    }else if(numero < numeroAzar){
        mensaje.textContent="El numero ingresado es mas grande";
        mensaje.style.color="red";

    }else {
        mensaje.textContent="El numero ingresado es mas chico";
        mensaje.style.color="red";

    }
    



}
