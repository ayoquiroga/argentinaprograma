/* 3. Escribe un programa que solicite al usuario ingresar un número entero. Guardar el programa en un archivo operadoresLogicos.js. 
A continuación, evalúa las siguientes condiciones:
- Si el número es positivo y par, muestra por consola el mensaje: "El numero es positivo y par".
- Si el número es positivo e impar, muestra por consola el mensaje: "El numero es positivo e impar".
- Si el número es negativo, muestra por consola el mensaje: "El numero es negativo".
- Si el número es cero, muestra por consola el mensaje: "El numero es cero".
NOTA: utilizar los operadores lógicos. */

// Requerimiento de 'readline-sync'
const readlineSync = require('readline-sync');

// Asignación a la variable numero_entero lo que ingrese el usuario por consola que será tratado por método question de readlinesync y transformado a numero
let numero_entero= Number(readlineSync.question('Ingrese un número entero por favor > '));

//NOTA: utilizar los operadores lógicos. */

//- Si el número es positivo y par, muestra por consola el mensaje: "El numero es positivo y par".
if (numero_entero > 0 && numero_entero %2 === 0) {
    console.log('El numero es positivo y par');
}

//- Si el número es positivo e impar, muestra por consola el mensaje: "El numero es positivo e impar".
if (numero_entero > 0 && numero_entero %2 !== 0) {
    console.log('El numero es positivo y impar');
}

//- Si el número es negativo, muestra por consola el mensaje: "El numero es negativo".
if (numero_entero < 0 ) {
    console.log('El numero es negativo');
}

//- Si el número es cero, muestra por consola el mensaje: "El numero es cero".
if (numero_entero === 0 ) {
    console.log('El numero es cero');
}