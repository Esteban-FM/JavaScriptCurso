/*
se pueden agregar un parametro dentro de la funcion
llamada para utilizarlos despues dentro de argumentos
*/
function suma(a) {
//dentro de la funcion es un parametro
    return a + 2;
}

//llamamos a la funcion, agregamos un argumento y lo convertimos en una variable.
 let resultado = suma(5);
console.log(resultado);




//Las funciones pueden tener multiples argumentos y parametros
function multi(b,c){
    return b * c;
}
//
let respuesta = multi(5,6);
console.log(respuesta);
console.log(typeof multi);



