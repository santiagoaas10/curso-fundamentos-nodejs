/* let saludo = 'hola'
console.log('saludo')
 */

//si necesito una vrble externa qué?
//es decir, algo onde necesite una credencial, contraseña o algo así.
//eso no debería estar en el código
//por ende:

let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.MI_WEB || 'no tengo web';

console.log('hola '+nombre);
console.log('hola a todos  '+web);

//así se corre
/* $env:NOMBRE="Carlos"
$env:web="paginaweb"
node conceptos/entorno.js */