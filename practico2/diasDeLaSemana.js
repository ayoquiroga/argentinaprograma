/* 4. Escriba un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana. 
Guardar el programa en un archivo diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
- Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
- Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
- Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
- Y así sucesivamente …
- Para cualquier otro número, muestra por consola el mensaje: "Número inválido".
NOTA: utilizar la sentencia switch-case */


// Requerimiento de 'readline-sync'
const readlineSync = require('readline-sync');

// Asignación a la variable mes lo que ingrese el usuario por consola que será tratado por método question de readlinesync y transformado a numero
let dia= readlineSync.question('Ingrese un número del 1 al 7 por favor > ');

// declaración de variable mes_elegido para luego ir guardando el nombre del mes que fue elegido 
let dia_elegido;

//estructura switch para identificar el mes según lo ingresado por el usuario
switch(dia){
    case '1':
        dia_elegido = 'Lunes';
        console.log(`Hoy es  ${dia_elegido}.`);
        break;
    case '2':
        dia_elegido = 'Martes';
        console.log(`Hoy es  ${dia_elegido}.`);
        break;
    case '3':
        dia_elegido = 'Miércoles';
        console.log(`Hoy es  ${dia_elegido}.`);
        break;
    case '4':
        dia_elegido = 'Jueves';
        console.log(`Hoy es  ${dia_elegido}.`);
        break;
    case '5':
        dia_elegido = 'Viernes';
        console.log(`Hoy es  ${dia_elegido}.`);
        break;
    case '6':
        dia_elegido = 'Sábado';
        console.log(`Hoy es  ${dia_elegido}.`);
        break;
    case '7':
        dia_elegido = 'Domingo';
        console.log(`Hoy es  ${dia_elegido}.`);
        break;
    default:
         console.log('Número inválido');
         break;
}