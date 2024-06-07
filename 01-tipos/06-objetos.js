// Personaje de TV
let nombre = "Tanjito";
let anime = "Demon slayer";
let edad = "16";

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,


};
console.log(personaje);
//accedder solamente a una propiedad
console.log(personaje.nombre);
//acceder a las propiedades de un objeto
console.log(personaje['anime']);

//Cambiar la propiedad
personaje.edad = 13;

//Cambiar la propiedad para iterar por definicion de variable

let llave = 'edad';
personaje [llave] = 16;

//eliminar propiedad
delete personaje.anime;
console.log(personaje);
