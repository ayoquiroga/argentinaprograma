/* 1. Escribe un programa para cada uno de los siguientes enunciados:
a. Solicite al usuario ingresar su edad. Si la edad es mayor o igual a 18, muestra por consola el mensaje: "Eres mayor de edad". De lo contrario,
muestra por consola el mensaje: "Eres menor de edad". Guardar en un archivo llamado mayorDeEdad.js */

// Requerimiento de 'readline-sync'
const readlineSync = require('readline-sync');

// Asignación a la variable edad lo que ingrese el usuario por consola que será tratado por método question de readlinesync
let edad = readlineSync.question("cuál es tu edad? --> ");

//Condición para mostrar si es mayor o menor de edad
if(edad>=18){

    console.log('Eres mayor de edad');
    
}else{

    console.log('Eres menor de edad');
}