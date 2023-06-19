/* b. Solicite al usuario ingresar un número. Si el número es positivo, muestra por consola el mensaje: "El numero es positivo". 
Si el número es igual a cero, muestra por consola el mensaje: "El numero es cero". Si el número es negativo, muestra por consola 
el mensaje: "El numero es negativo". Guardar el programa en un archivo con nombre positivoNegativo.js */

// Requerimiento de 'readline-sync'
const readlineSync = require('readline-sync');
  
// Asignación a la variable numero lo que ingrese el usuario por consola que será tratado por método question de readlinesync
let numero= readlineSync.question('Ingrese un número por favor > ');

//Estructura Do para identificar con if anidados el tipo de número que se ingrese
    // si el número es positivo y se muestra 
    if ( numero > 0  ) {

        console.log('El número es positivo');

    // si el número es negativo y se muestra 
    } else if ( numero == 0 ) {

        console.log('El número es cero');

    // si el número es cero y se muestra 
    } else if ( numero < 0 ) {

        console.log('El número es negativo');
    }