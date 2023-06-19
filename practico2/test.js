const readlineSync = require('readline-sync');
let name = readlineSync.question("cuál es tu nombre?");
console.log('Tu nombre es: %s', name);