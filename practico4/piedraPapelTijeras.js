// referencia a la librería 'readline-sync' en una constante para luego utilizarla al solicitar ingreso de datos
const readlineSync = require('readline-sync');

// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc

// declración de variable para guardar la opción que ingrese el usuario
let opcion_de_juego;

// declaración e inicialización de una bandera/flag boolena
let con_opciones = false;

// bucle para solicitar que se ingrese una opción de cantidad de partidas
while(!con_opciones){

    // solicitud de ingreso de opción y salvarla en la variable "opcion_de_juego"
    opcion_de_juego = readlineSync.question(`Ingrese una de las siguientes opciones:     -> (a). 1 Jugada\n
                                            -> (b). 2 Jugadas \n 
                                            -> (c). Mejor de 3 jugadas o diferencias de 2 jugadas ganadas\n
                                            --> `).toLowerCase();

    // Condiconal para detectar si alguna de las opciones ingresadas no son correctas
    if(!(   opcion_de_juego.includes('a') ||  
            opcion_de_juego.includes('b') || 
            opcion_de_juego.includes('c')   )   ){
    
        //si lo anterior se cumple entonces que se muestre el siguiente mensaje
        console.log('¡CUIDADO! Debes Ingresar unas de las opciones indicadas: |((. a .))|  |((. b .))|  |((. C .))|');
    }

    // bandera/flag se vuelve true si alguna de las "opcion_de_juego" es verdadera y para salir del bucle While
    con_opciones = (opcion_de_juego == 'a' ||
                    opcion_de_juego == 'b' ||
                    opcion_de_juego == 'c');
}

// Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
// numércios y los strings “piedra”, “papel” y “tijeras.
const opciones_obj = {
    0 : "piedra",
    1 : "papel",
    2 : "tijeras"
}

// declaración de la variable "aleatorio" para guardar la opción de juego de la computadora 
let aleatorio;

// función para generar un nùmero aleatorio entre 0 y 2 "Siempre utilizando los valores de strings y no los valores númericos."
function obtenerJugadaComputadora() {
    
    // generación del número aleatorio con la clase Math y los métodos floor y random
    aleatorio =  Math.floor(Math.random()*3);

    // representar las opciones:
    if ( aleatorio === 0 ){

        // return "piedra" si el aleatorio es "0" y se retorna como constante utilizando atributo de "opciones_obj";
        return opciones_obj[0];

  } else if ( aleatorio === 1 ){

        // return "papel" si el aleatorio es "1" y se retorna como constante utilizando atributo de "opciones_obj";
        return opciones_obj[1];

  } else if ( aleatorio === 2 ){

        // return "tijeras" si el aleatorio es "2" y se retorna como constante utilizando atributo de "opciones_obj";
        return opciones_obj[2];
  }
}

//declaro opcion de usuario para gardar lo que elija el usuario
let opcion_usuario;

//delcaro un bandera booleana "eleccion" en false que utilizaré en el bucle While como condición
let eleccion = false;

// 3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
// elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
function obtenerJugadaUsuario(){

    // Bucle While hasta que se eleija una opción
    while (!eleccion) {

        // solicitud al usuario para que ingrese una de las opciones pasandola a minúsculas
        opcion_usuario = readlineSync.question(`Ingrese una de las siguientes opciones:\n- ( piedra ) \n- ( papel ) \n- ( tijeras ) \n --> `).toLowerCase();

        // Condición de si alguna de las opciones ingresadas no es igual a la estrucutra de datos de "opciones_obj"
        if( !(  opcion_usuario === opciones_obj[0]   ||
                opcion_usuario === opciones_obj[1]   ||
                opcion_usuario === opciones_obj[2]  ) ) {
  
            // ...que muestre un mensaje 
            console.log("\n¡CUIDADO! -Debes elegir entre:\n |**( piedra )**| |**( papel )**| |**( tijeras )**|\n");

            // que continúe, en  el bucle while, solicitándo que ingrese una opción
            continue
        }
        
        // si lo anterior no se cumple entonces que retorne la opcion elegida
        return opcion_usuario;
    }
}

// declaración de variables que guardarán la cantidad de paritdas ganadas de cada jugador
let rondas_ganadas_COMPU = 0;
let rondas_ganadas_JUGADOR = 0;

// 4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas de la computadora 
// y del usuario. Implementa las reglas del juego para determinar el ganador y retorna el resultado.
function determinarGanador( juego_computadora , juego_usuario ){

    // Si las jugadas son iguales.. 
    if ( juego_computadora == juego_usuario ) {

        // ... hay "EMPATE"
        return "EMPATE";

    // sino este condicional evalúa las reglas, con constantes, para saber si COMPUTADORA gana
    } else if (         juego_computadora == opciones_obj[0] && juego_usuario == opciones_obj[2]
                    ||  juego_computadora == opciones_obj[2] && juego_usuario == opciones_obj[1]
                    ||  juego_computadora == opciones_obj[1] && juego_usuario == opciones_obj[0]  ){

        //aumenta el contador de rondas ganadas por la computadora                
        rondas_ganadas_COMPU++;

        // retorno el mensaje "COMPUTADORA GANA LA RONDA"
        return "COMPUTADORA GANA LA RONDA";

    // si lo anterior no se cumple entonces gana JUAGADOR
    }  else {

        //aumenta el contador de rondas ganadas por el jugador    
        rondas_ganadas_JUGADOR++;

         // retorno el mensaje "JUGADOR GANA LA RONDA"
        return "JUGADOR GANA LA RONDA";
    }
}

// decalración de variable "jugada_computadora" donde se guardará la opción que se genere para la computadora
let jugada_computadora;

// decalración de variable "jugada_usuario" donde se guardará la opción que ingrese el usaurio
let jugada_usuario

// declaración de variable donde guardará el mensaje que retorne la función "determinarGanador()"
let mensaje_resultado;

// decalración de la variable contador "jugadas" para guardar la cantidad de jugadas de cada ronda
let jugadas = 0;

// bucle para iterar las jugadas que correspondan según la opción elegida y las rondas que correspondan 
while(      (opcion_de_juego === 'a' && jugadas < 1 ) 
        ||  (opcion_de_juego === 'b' && jugadas < 2 && rondas_ganadas_COMPU < 2 && rondas_ganadas_JUGADOR < 2)
        ||  (opcion_de_juego === 'c' && !(  rondas_ganadas_COMPU - rondas_ganadas_JUGADOR == 2 || 
                                            rondas_ganadas_JUGADOR - rondas_ganadas_COMPU == 2))){

    // 5. Llama a las funciones en el orden adecuado para ejecutar el juego:
    // a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
    jugada_computadora = obtenerJugadaComputadora();

    // b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
    jugada_usuario = obtenerJugadaUsuario();

    // c) Invoca la función determinarGanador pasando como argumentos las jugadas de
    // la computadora y del usuario. Almacena el resultado en una variable.
    mensaje_resultado = determinarGanador(jugada_computadora,jugada_usuario);

    // se incrementa el contador "jugadas"
    jugadas++;

    // mostrar por consola las rondas que se van jugando
    console.log(`   ------------------------------------
    Ronda N°: ${jugadas}`)
    
    console.log(`   ------------------------------------
    La computadora eligio: ${jugada_computadora}.
    ------------------------------------
    El usuario eligio: ${jugada_usuario}.
    ------------------------------------
    El resultado fue: ${mensaje_resultado}
    ------------------------------------`);
}

// ondicionales para mostrar resultados finales de cada partida
// condicional para mostrar "EMPATE" si la opción elgida fue la "b" y cada jugador ganó una vez
if( opcion_de_juego === 'b' && rondas_ganadas_COMPU == rondas_ganadas_JUGADOR && jugadas == 2 ){

    console.log(`    ****************************************************************************
    Resultado final: ** ¡EMPATE! **  |  JUGADOR-> ${rondas_ganadas_JUGADOR} | COMPUTADORA-> ${rondas_ganadas_COMPU} |
    ****************************************************************************\n`); 

// condicional para mostrar a "JUGADOR" como ganador si la opción elegida fue la "b" y las rondas ganadas es mayor a la de computadora
} else if( opcion_de_juego === 'b' && rondas_ganadas_COMPU < rondas_ganadas_JUGADOR ){

    console.log(`    ****************************************************************************
    Resultado final: ** ¡GANÓ JUGADOR! **  | JUGADOR-> ${rondas_ganadas_JUGADOR} | COMPUTADORA-> ${rondas_ganadas_COMPU} |
    ****************************************************************************\n`);

// condicional para mostrar a "COMPUTADORA" como ganador si la opción elegida fue la "b" y las rondas ganadas es mayor a la de jugador
} else if( opcion_de_juego === 'b' && rondas_ganadas_COMPU > rondas_ganadas_JUGADOR ){

    console.log(`    ****************************************************************************
    Resultado final: ** ¡GANÓ COMPUTADORA! **  | COMPUTADORA-> ${rondas_ganadas_COMPU} | JUGADOR-> ${rondas_ganadas_JUGADOR} |
    ****************************************************************************\n`);
    
// condicional para mostrar a "COMPUTADORA" como ganador si la opción elegida fue la "c" y las rondas ganadas son 2 o 3
} else if( opcion_de_juego === 'c' && (rondas_ganadas_COMPU - rondas_ganadas_JUGADOR === 2) ){
   
    console.log(`    ****************************************************************************
    Resultado final: ** ¡GANÓ COMPUTADORA! **  | COMPUTADORA-> ${rondas_ganadas_COMPU} | JUGADOR-> ${rondas_ganadas_JUGADOR} |
    ****************************************************************************\n`);

// condicional para mostrar a "JUGADOR" como ganador si la opción elegida fue la "c" y las rondas ganadas son 2 o 3
} else if( opcion_de_juego === 'c' && (rondas_ganadas_JUGADOR - rondas_ganadas_COMPU === 2) ){

    console.log(`    ****************************************************************************
    Resultado final: ** ¡GANÓ JUGADOR! ** | JUGADOR-> ${rondas_ganadas_JUGADOR} | COMPUTADORA-> ${rondas_ganadas_COMPU} |
    ****************************************************************************\n`);
}