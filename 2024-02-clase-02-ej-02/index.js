//Acumuladores y contadores
let acumuladorDes = 0, acumuladorAprob = 0, acumuladorProm = 0;

let contadorDes = 0, contadorAprob = 0, contadorProm = 0;

let maxNota = 1, minNota = 10;

do {
    let nota = parseInt(prompt("ingrese nota del 1 al 10"));

    //hago la pregunta
    if(nota < 4){
        //estara desaprobado
        contadorDes ++;
        acumuladorDes += nota;
    }else{
        //estara aprobado
        contadorAprob ++;
        acumuladorAprob += nota;

        //preguntar si esta promocionado
        if(nota >= 7){
            //esta promocionado
            contadorProm ++;
        acumuladorProm += nota;
        }
    }

    //preguntar si la n ota es mayor a la anterior
    if(nota > maxNota){
        //De ser asi encontrar un nuevo max
        maxNota=nota;
    }
    //preguntar si la nota es menor a la anterior
    if(nota < minNota){
        //De ser asi encontrar un nuevo min
        minNota=nota;
    }
    
}while(confirm("ingresar nota"));

//cuando finalice el ingreso de notas, sacar los promedios.

alert (`Hubo ${contadorDes} estudiantes desaprobados y su nota promedio fue de ${(acumuladorDes/contadorDes).toFixed(1)}`);
alert (`Hubo ${contadorAprob} estudiantes aprobados y su nota promedio fue de ${(acumuladorAprob/contadorAprob).toFixed(1)}`);
alert (`Hubo ${contadorProm} estudiantes promocionados y su nota promedio fue de ${(acumuladorProm/contadorProm).toFixed(1)}`);

alert(`La nota minima de la comsión fue ${minNota} y la nota maxima de la comisión fue ${maxNota}`);