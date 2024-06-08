//AND, OR, NOT

// AND &&
//Evalua cada valor, dando como resultado un boleano
console.log(true && true); // si ambos son true, será true, si alguno es false, será false
console.log(false&& true); // si alguno es false, será false
console.log(false && false); // si ambos son false, será false

//Ejemplo de uso en suscripcion y edad en plataforma
let mayor = true;
let suscrito = true;
console.log( 'operador "AND"', mayor && suscrito);


// OR ||
// Mostrara "true" si es que alguno de los valores es "true"
console.log( 'operador "OR"', mayor || suscrito);

// NOT !
//Invierte el valor boleano, ya sea de "true a false" o "false a true"
console.log( 'operador "NOT"', !mayor);

//Ejemplo de uso
let catalogoInfantil = !mayor;