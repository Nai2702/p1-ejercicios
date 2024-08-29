"use strict";

//se declaran las variables solicitadas

let ciudad, sexo, edad;
let datoValido=true;

// Variables para obtener el promedios (necesito contadores y acumuladores)
let contGeneral=0, contEdadMujer=0, contEdadHombres=0, contNoBinario=0;
let acumEdadGeneral=  0, acumEdadMujer = 0, acumEdadHombres=0, acumEdadNoBinario=0;


//variables para calcular porcentajes

let contadorMujerMenor21 = 0, contadorHombresMayor21 = 0;

// variables para edad min de mujer y edad max de hombres

let mayorEdadMujer = 0, menorEdadHombre = 110;

do{
    //validacion de la ciudad
    do{

        ciudad = prompt("ingrese nombre de la ciudad");

        if(!isNaN(ciudad)){
            alert("ingrese TEXTO, no ingresar números");
            datoValido=false;
        }else if (ciudad === null){
            alert("Igrese TEXTO, no dejar campos vacios");
            datoValido=false;
        }else if(ciudad.trim() === "" ){
            alert("No dejar el prompt vacio");
            datoValido=false;
        }else{
            datoValido=true;
        }

    }while(!datoValido);


    //Validacion del sexo

    do{

        sexo = prompt("ingrese sexo (M , H , X)");

        if(!isNaN(sexo)){
            alert("ingrese (M , H , X), NO NÚMEROS");
            datoValido=false;
        }else if(sexo === null) {
            alert("Igrese TEXTO, no dejar campos vacios");
            datoValido=false;
        }else if(sexo.toLowerCase() !== "m" && sexo.toLowerCase() !== "h" && sexo.toLowerCase() !== "x"){
            alert("ingrese un dato valido (M , H , X)");
            datoValido=false;
        }else if(ciudad.trim() ===""){
            alert("No dejar el prompt vacio");
            datoValido=false;
        }else{
            datoValido=true;
        }

    }while(!datoValido);


    //Validacion de edad
    do{
        
        edad = parseInt(prompt('ingrese edad entre 0 y 110'));

        if(isNaN(edad)){
            alert("Ingresar dato númerico");
            datoValido=false;

        }else if(edad < 0  ||  edad > 110){
            alert("Ingresar dato valido ente 0 y 100");
            datoValido = false;    
       
        }else if(edad === null){
            alert("Igrese TEXTO, no dejar campos vacios");
            datoValido = false;
        }else{
            datoValido = true;
        }

    }while(!datoValido);



    //todo validado


     // incrementar siempre el contador general y acumular edad ingresada
     contGeneral++;
     acumEdadGeneral += edad;

        if(sexo.toLowerCase() === "h"){
            // si el sexo ingresado es hombre incremento el contador de hombres y acumulo su edad

            contEdadHombres++;
            acumEdadHombres += edad;

            //verifico si es mayor a 21 años
            if(edad > 21){
                contadorHombresMayor21 ++;
            }
            //verifico si es el hombre de menor edad
            if(edad < menorEdadHombre){
                menorEdadHombre = edad;
            }

            //verifico si es mujer
        }else if(sexo.toLowerCase() === "m"){
            //entonces incremento el contador de mujer y agrego su edad al acumulador de edad de mujer
        contEdadMujer ++;
        acumEdadMujer += edad;

            //verifico si es menor a 21
            if(edad < 21){
                contadorMujerMenor21 ++;
            }

            //verifico si es la mujer de mayor edad
            if(edad > mayorEdadMujer){
              mayorEdadMujer = edad;
            }
        }else {
            //es no binario
            contNoBinario ++;
            acumEdadNoBinario += edad;
        }

 }while(confirm("otro dato?"));
    

//Muestro promedios
document.write(`<ul>
                <li>Promedio de edad General: ${(acumEdadGeneral/contGeneral).toFixed(2)}</li>
                <li>Promedio de edad Hombres: ${(acumEdadHombres/contEdadHombres).toFixed(2)}</li>
                <li>Promedio de edad Hombres: ${(acumEdadMujer/contEdadMujer).toFixed(2)}</li>
                <li>Promedio de edad Hombres: ${(acumEdadNoBinario/contNoBinario).toFixed(2)}</li>
              </ul>`)

//muestro porcentajes
document.write(`<ul>
                <li>Un ${100 * (contadorMujerMenor21 / contGeneral)}% son Mujeres menores a 21 años</li>
                <li>Un ${100 * (contadorHombresMayor21 / contGeneral)}% son Hombres mayores a 21 años</li>
               </ul>`)

//muestro edad las Mujer mayor y el Hombre menor
document.write(`<ul>
                <li>La mujer de mayor edad tiene ${mayorEdadMujer} años</li>
                <li>El hombre de menor edad tiene ${menorEdadHombre} años</li>
              </ul>`)


