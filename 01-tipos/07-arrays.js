//array
let animales = ['chancho', 'caballo'];
console.log(animales);

//acceder a un elemento especifico
console.log(animales[0]);

//agregar elementos al array
animales [2] = 'dragon';
console.log(animales);

//Al colocar un valor en un indice no consecutivo a los existentes
animales[10] = 'pez';
//El array mostrara una longitud de 11, con 7 espacios vacios
console.log(animales);


//aparecera como sin definir
console.log(animales[7]);


//los array se comportan como objetos
console.log (typeof animales);

//debolvera la cantidad de elementos dentro del array
console.log(animales.length);