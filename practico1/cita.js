// 4. Manejo de strings: Deberás crear un programa en el archivo cita.js. 
//En esta tarea, se te proporcionan dos variables, cita y substring, que contienen dos cadenas. Nos gustaría que:
//    a. Recuperes la longitud de la cita y la guardes en una variable llamada tamañoDeCita. Deberás imprimir por consola un mensaje 
//       con el siguiente formato: “El tamaño de la cita es: [tamañoCita]”
//    b. Busques la posición del índice donde aparece substring en cita, y almacenes ese valor en una variable llamada indice. 
//       Deberás imprimir por consola un mensaje con el siguiente formato: “El indice del substring es: [indice]”
//    c. Usa una combinación de las variables que tienes y las  propiedades/métodos de cadena disponibles para recortar la cita original
//              a "Tres tristes tigres comen trigo", y la guardes en una variable // llamada citaRevisada. Por último, para verificar 
//              que el valor de citaRevisada es correcto, deberás imprimirla por consola.
// Los valores iniciales de cita y substring son los siguientes:
//  ● cita = “Tres tristes tigres comen trigo en un trigal”
//  ● substring = “tigres comen trigo”

let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

//    a. Recuperes la longitud de la cita y la guardes en una variable llamada tamañoDeCita. Deberás imprimir por consola un mensaje 
//       con el siguiente formato: “El tamaño de la cita es: [tamañoCita]”
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %i",tamañoDeCita);

//    b. Busques la posición del índice donde aparece substring en cita, y almacenes ese valor en una variable llamada indice. 
//       Deberás imprimir por consola un mensaje con el siguiente formato: “El indice del substring es: [indice]”

let indice = cita.indexOf(substring);
console.log('El indice del substring es: %i', indice);

//    c. Usa una combinación de las variables que tienes y las  propiedades/métodos de cadena disponibles para recortar la cita original
//       a "Tres tristes tigres comen trigo", y la guardes en una variable llamada citaRevisada. 
//       Por último, para verificar  que el valor de citaRevisada es correcto, deberás imprimirla por consola.
let substring_de_cita = cita.split(" ");
let citaRevisada = substring_de_cita[0]+" "+substring_de_cita[1]+" "+substring;
console.log(citaRevisada);

//punto c con  replace => 'Hola Mundo'.replace('Mundo', 'Amigo');
//let citaRevisada2 = cita.replace(cita,"Tres tristes tigres comen trigo");
//console.log(citaRevisada2+" AQUI CON REPLACE");
