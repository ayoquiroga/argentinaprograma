// PARTE 2: COMANDOS BÁSICOS
// 3. Operadores aritméticos:
//      a. Crea cuatro variables que contengan valores numéricos.
//      b. Suma las dos primeras variables y guarda el resultado en otra variable.
//      c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
//      d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal. 
//          El producto debe ser 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
//      e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.
//      f. Imprima por consola un mensaje con el siguiente formato: // “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. 
//          La respuesta a verificar si el resultado final es par es: [esPar]”
//      g. Deberá guardar este programa en un archivo llamado operacionesAritmeticas.js

//      a. Crea cuatro variables que contengan valores numéricos.
let numero1 = 3;
let numero2 = 1;
let numero3 = 7;
let numero4 = 18;

//      b. Suma las dos primeras variables y guarda el resultado en otra variable.
let suma = numero1 + numero2 ;

//      c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let resta = numero4 - numero3;

//      d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal. 
//          El producto debe ser 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
let resultadoFinal = suma * resta;

//      e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.
let esPar = resultadoFinal %2==0;


//      f. Imprima por consola un mensaje con el siguiente formato: // “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. 
//          La respuesta a verificar si el resultado final es par es: [esPar]”

console.log(`Mis variables iniciales fueron: ${numero1}, ${numero2}, ${numero3} y ${numero4}. 
La respuesta al verificar si el resultado final es par es: ${esPar}`);