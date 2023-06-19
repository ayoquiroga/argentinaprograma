/* 2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al 12 representando los meses de un año; 
donde 1 es enero, 2 es febrero, 3 es marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en el texto a imprimir. 
Su programa deberá ser guardado en un archivo meses.js y consistirá de imprimir por consola la cantidad de días que tiene el mes
ingresado bajo el siguiente formato: "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad de dias del mes de enero es 31”.
NOTAS:
● Nota que el valor de [mes] no es el numero ingresado si no su correspondiente almacenado en la estructura de datos elegida.
● Para el alcance de este ejercicio, podemos pensar que febrero siempre tiene 28 días.
 */

// Requerimiento de 'readline-sync'
const readlineSync = require('readline-sync');

// Asignación a la variable mes lo que ingrese el usuario por consola que será tratado por método question de readlinesync y transformado a numero
let mes= Number(readlineSync.question('Ingrese un número del 1 al 12 por favor > '));

//let mes = readlineSync.question('Ingrese un número del 1 al 12 por favor > ');
// declaración de variable días para luego ir guardando la cantidad que tiene el mes según el caso elegido
let dias;

// declaración de variable mes_elegido para luego ir guardando el nombre del mes que fue elegido 
let mes_elegido = '';

// estructura switch para identificar el mes según lo ingresado por el usuario
// e impresión por consola tal como solicita el ejercicio
switch(mes){
    case 1:
        mes_elegido = 'enero';
        dias = 31;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 2:
        mes_elegido = 'febrero';
        dias = 28;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 3:
        mes_elegido = 'marzo';
        dias = 31;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 4:
        mes_elegido = 'abril';
        dias = 30;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 5:
        mes_elegido = 'mayo';
        dias = 31;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 6:
        mes_elegido = 'junio';
        dias = 30;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 7:
        mes_elegido = 'julio';
        dias = 31;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 8:
        mes_elegido = 'agosto';
        dias = 31;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 9:
        mes_elegido = 'septiembre';
        dias = 30;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 10:
        mes_elegido = 'octubre';
        dias = 31;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 11:
        mes_elegido = 'noviembre';
        dias = 30;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    case 12:
        mes_elegido = 'diciembre';
        dias = 31;
        console.log(`La cantidad de dias del mes de ${mes_elegido} es ${dias}.`);
        break;
    default:
        console.log('Número inválido');
        break;
}