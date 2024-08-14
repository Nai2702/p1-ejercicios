//pido dos extremos para comparar
const max = parseInt(prompt("Ingrese el maximo para comparar"));
const min = parseInt(prompt("Ingrese el minimo para comparar"));

// pido el numero para comparar
const num = parseInt(prompt("ingrese un numero a comparar"));

//Verifico si el numero esta en rango
if( num >= min && num <= max){
    //si num esta entre el max y el min
    alert("el numero esta en rango");
}else{
    //si no esta en rango
    alert("el numero no esta en rango");
}

//pregunto si es par o impar
if (num % 2 ==1){
    alert("el numero es impar");
}else{
    alert("el numero es par");
}