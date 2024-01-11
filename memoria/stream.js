//---------------parte1------------------
//stream de lectura
const fs = require('fs');
const stream = require('stream');
const util = require('util');

/* 
let data ='';
let readableStream=fs.createReadStream(__dirname +'/input.txt')
readableStream.setEncoding('UTF8');
readableStream.on('data', function (chunk){
    // console.log(chunk); 
    data+=chunk//cuando el archivo es muy grande (de gigas) lo vamos acumulando así
})

readableStream.on('end',function(){
    console.log(data); //y al final lo mostramos
})
 */




//parte 2, 
//---------------Buffer de escritutra---------
/* process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal') */


//parte 3,
//----------stream de lectura-escritura-------
const Transform = stream.Transform;
let data ='';
let readableStream=fs.createReadStream(__dirname +'/input.txt')
readableStream.setEncoding('UTF8');


function Mayus(){
    Transform.call(this)
}

util.inherits(Mayus, Transform);
Mayus.prototype._transform = function (chunk,codif, cb){
    chunkMayus= chunk.toString().toUpperCase()
    this.push(chunkMayus);
    cb()
}

var mayus =new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)