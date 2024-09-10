"use strict"

/**
 * pide y valida un string
 * @param {string} msg 
 * @returns un string validado
 */
//Primera Funcion 

function validarString( msg = " ") {

    //booleano usado para validar
    let datoValido;

    //variable auxiliar
    let aux;

    do{

        //pedir y validar materia
        aux = prompt (msg);
        //valido que no sea un numero

        if(!isNaN(aux)){
            alert("Ingrese texto");
            datoValido = false;
        
         //Valido que no den cancelar
        }else if (aux === null){
            alert( "Ingrese un dato, No presione cancela");
            datoValido = false;

        //Valido que no dejen campos vacios
        }else if ( aux.trim() === ""){
            alert("No deje el campo vacio");
            datoValido = false;
        }else{
            datoValido =true;
        }

    }while(!datoValido);
    //devuelvo el dato validado
    return aux;
}


/**
 * pide y valida nota
 * @param {string} msg 
 * @returns Nota validada entre 4 y 10
 */

function validarNota (msg = " "){

    //booleano usado para validar
    let datoValido;

    //variable auxiliar
    let aux;

    do{
        //pido la nota
        aux = parseInt(prompt(msg));

        //valido que el dato sea un numero
        if(isNaN(aux)){
            alert("Ingrese numeros");
            datoValido = false;
        // valido que la nota este en rango
        }else if(aux < 4 || aux > 10){
            alert("Ingrese numeros entre 4 y 10");
            datoValido=false;
        // valido que no presion Cancel
        }else{
            datoValido = true;
        }

    }while(!datoValido);

    //devuelve el dato validado
    return aux;

}