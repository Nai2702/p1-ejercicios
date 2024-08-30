"use strict"
// Variables globales
let numero1, numero2, suma, resta, multiplicacion, division;
let resultadoFinal;
/**
 * Funcion que atiende el click para pedir el primer numero
 */
function pedirNumero1() {
    // Copio el numero validado en la variable global
    numero1 = validarNumero("Ingrese el primer numero");
}

/**
 * Funcion que atiende el click para pedir el segundo numero
 */
function pedirNumero2() {
    // Copio el numero validado en la variable global
    numero2 = validarNumero("Ingrese el segundo numero");
}


/**
 * Funcion que resta los dos numeros pedidos
 */

function restar() {
    resta = numero1 - numero2;
    resultadoFinal = resta;
}

/**
 * Funcion que suma los dos numeros pedidos
 */
function sumar() {
    suma = numero1 + numero2;
    resultadoFinal = suma;

}
/**
 * Funcion que multiplica los dos numero pedidos
 */
function multiplicar(){
    multiplicacion = numero1 * numero2;
    resultadoFinal = multiplicacion;
}

/**
 * Funcion que divide los dos numeros pedidos
 */
function dividir(){
//Validar que el numero uno no se puede dividir por cero
    if(numero2 === 0){
        alert(`ERROR:El segundo numero debe ser diferente a 0`)
    }else{
    division = numero1 / numero2;
    resultadoFinal = division;
    }
}

/**
 * Funcion que muestra el resultado de la suma
 */
function resultado() {
 
  alert(`el resultado es ${resultadoFinal}`);
    }


/**
 * Funcion encargada de pedir y validar un numero
 * @param {String} msg mensaje que aparece en el prompt
 * @returns numero valido
 */
function validarNumero(msg = "") {
    // Variable local para validar
    let numero;
    do {
        numero = parseInt(prompt(msg));

        if(isNaN(numero)) {
            alert("Solo se aceptan numeros");
        }

    } while(isNaN(numero));

    // Retorno numero validado a quien lo llamo
    return numero;

    // Este mensaje nunca aparece porque se corta en seco la funcion con el return
    alert("Mensaje post return");
}




/*
// Error
restar(2, 4);

// Funcion declarada como variable
const restar = function(num1, num2) {
    suma = num1 - num2;
}

// Aca si puedo llamarla
restar(2, 4);*/