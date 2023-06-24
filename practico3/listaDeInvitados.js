/* LISTA DE INVITADOS
En este ejercicio, que guardaremos en un archivo listaDeInvitados.js, queremos que tomes una lista de nombres almacenados en un arreglo 
y los coloques en una lista de invitados. Pero no es tan fácil: no queremos dejar entrar a Jose y Sofia porque son codiciosos y groseros,
¡y siempre se comen toda la comida! Tenemos dos listas, una para admitir invitados y otra para rechazar invitados.
La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia, Leandro y Emilia.
Específicamente, queremos que:
    ● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.
    Deberá comenzar con un inicializador de let i = 0; pero ¿qué condición de salida necesita?
    ● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es igual a "Jose" o "Sofia" usando una declaración condicional:
        - Si es así, concatene el elemento al arreglo de rechazados.
        - Si no es así, concatene el elemento al arreglo de admitidos.
    ● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de invitados admitidos y otra para imprimir la lista de 
    invitados rechazados:
        a. Para la lista de invitados admitidos deberás imprimir por consola un mensaje inicial que dirá: “La lista de invitados admitidos es:”,
         seguido por tantos párrafos como tenga el arreglo admitidos conteniendo los respectivos nombres de los invitados.
        b. Para la lista de invitados rechazados deberás imprimir por consola un mensaje inicial que dirá: "La lista de invitados rechazados es:”, 
    seguido por tantos párrafos como tenga el arreglo rechazados conteniendo los respectivos nombres de los invitados.

    ● EXTRA: Después de completar con éxito las tareas anteriores, te quedarán dos listas de nombres, los admitidos y los rechazados pero estarán 
    desordenados. El desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los nombres de manera ordenada alfabéticamente.
     Deberás agregar la palabra “ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos deberás imprimir: 
     “La lista ordenada de invitados admitidos es:” */

// declaración del array con el que se trabajará y asignación de valores
const lista_nombres = ['José','Maria','Juan','Andres','Lionel','Sofia','Leandro','Emilia'];

// declaración de arrays en los que se guardará los invitados admitidos y rechazados
const admitidos = [];
const rechazados = [];

// bucle para encontrar invitados admitidos y rechazados
for( let i=0 ; i < lista_nombres.length ; i++ ){

    //    ● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es igual a "Jose" o "Sofia" usando una declaración condicional:
    //      - Si es así, concatene el elemento al arreglo de rechazados.
    if( lista_nombres[i] === 'José' || lista_nombres[i] === 'Sofia' ){

        rechazados.push(lista_nombres[i]);

    //      - Si no es así, concatene el elemento al arreglo de admitidos.
    } else {

        admitidos.push(lista_nombres[i]);

    }
}

// Para la lista de invitados admitidos deberás imprimir por consola un mensaje inicial que dirá: “La lista de invitados admitidos es:”
console.log('La lista de invitados admitidos es:');

// un bucle para imprimir la lista de invitados admitidos
for ( let a = 0 ; a < admitidos.length ; a++ ){

    console.log(admitidos[a]);

}

// Para la lista de invitados rechazados deberás imprimir por consola un mensaje inicial 
// que dirá: "La lista de invitados rechazados es:”
console.log('La lista de invitados rechazados es:');

// otro para imprimir la lista de invitados rechazados:
for ( let r=0 ; r < rechazados.length ; r++ ){

    console.log(rechazados[r]);

}

// El desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los nombres de manera ordenada alfabéticamente.
// Deberás agregar la palabra “ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos deberás imprimir: 
// “La lista ordenada de invitados admitidos es:”
console.log('La lista ordenada de invitados admitidos es:');

//Primer bucle para recorrer array admitidos
for ( let l = 0 ; l < admitidos.length ; l++ ) {

    // declaración de la variable "abc_minimo" y asignación  con índice "l" 
    // en su primer iteración ( l=0 ) se tomará como el elemento menor alfabéticamente del array "admitidos"
    let abc_minimo = l;

    // Segundo bucle con índice "o" para comparar los elementos del array "admitidos" con cada 
    // elemento al que apunte al índice "l" del bucle anterior y poder ordenarlos alfabeticamente
    for ( let o = l ; o < admitidos.length ; o++ ) {

        // si el elemento que apunta el ínidice "o" es menor alfabéticamente node li    
        // al elemento que apunta el índice "abc_minimo"
        if ( admitidos[o].toLowerCase() < admitidos[abc_minimo].toLowerCase()) {

            // entonces le re-asignamos el índice "o" a la variable "abc_minimo"
            abc_minimo = o;
        }
    }

    // se guarda el elemento al que apunta el índice "l" del primero bucle en la variable temp para resguardarlo
    let temp = admitidos[l];

    // si se encontró un nuevo elemento menor alfabéticamente, se asigna el elemento que apunta el 
    // índice "abc_minimo" al lugar que apunte el índice "l" que se esté recorriendo del primer bucle
    admitidos[l] = admitidos[abc_minimo];

    //luego se asigna el elemento que se resguardó en la variable temp al lugar que apunta el 
    // índice "abc_minimo" 
    admitidos[abc_minimo] = temp;
}

// con este bucle se imprime por consola el array "admitidos" ahora ordeando
for (let j = 0 ; j < admitidos.length ; j++ ){

    console.log(admitidos[j]);

}
