//modulo sistema operativo para acceder a cosas de muuuy bajo nivel pero que son tremendamente útiles
const os = require('os');

console.log(os.arch());//se ve la aquitectura
console.log(os.platform()); //me muestra en qué sistema operativo o lataforma está corriendo mi codigo
console.log(os.cpus()) // me muestra la cpus que tengo en mi sistema
console.log(os.cpus().length) // me muestra la cpus que tengo en mi sistema
console.log(os.constants)//constantes del sistema

const SIZE=1024;
function kb(bytes) {return bytes /SIZE}
function mb(bytes) {return kb(bytes)/SIZE}
function gb(bytes) {return mb(bytes)/SIZE}
//console.log(os.freemem())//bytes libres
console.log(kb(os.freemem()))//kilobytes libres
console.log(mb(os.freemem()))//megabytes libres
console.log(gb(os.freemem()))//gigabytes libres
console.log(gb(os.totalmem()))//gigabytes totales (RAM)


console.log(os.homedir())//este es mi directorio raiz
console.log(os.tmpdir())//este es mi directorio temporal
console.log(os.hostname())
console.log(os.networkInterfaces())

