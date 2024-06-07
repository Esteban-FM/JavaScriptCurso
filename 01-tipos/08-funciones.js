function saludar() {
    console.log('Hola Mundo');
}
//para llamar una funcion
saludar ();

// return nos permite reutilizar codigo dentro de las funciones
function suma (){
    return 2 + 2;
}
//una forma de imprimir el resultado de la funcion es colocarla dentro de una variable
let resultado = suma();
console.log (resultado);

// tambien se puede hacer llamando a la funcion
console.log (suma());