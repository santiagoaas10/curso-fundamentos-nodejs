//funcion pa leer archivo
const fs = require('fs');//file system, invocar módulo file system

function leer(ruta, cb){
    fs.readFile(ruta,(err,data)=>
    {
        cb(data.toString())
    })
}

//funcion para escribir archvos
function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido,function(err)
    {
        if (err)
        {
            console.error('no he podido escribirlo',err)
        }
        else
        {
            console.log('se ha escrito correctamente')
            cb(contenido)
        }
    })
}

//funcion para borrar archivos
function borrar(ruta,cb){
    fs.unlink(ruta,cb)
}

//leer(__dirname+'/archivo.txt',console.log)
//escribir(__dirname+'/archivo1.txt', 'hola soy un archivo escrito por la función escribir',console.log)
escribir(__dirname+'/archivo2.txt', 'hola soy un archivo que será borrado por la fnc borrar',console.log)
escribir(__dirname+'/archivo3.txt', 'hola soy un archivo que será borrado por la fnc borrar',console.log)
escribir(__dirname+'/archivo4.txt', 'hola soy un archivo que será borrado por la fnc borrar',console.log)
escribir(__dirname+'/archivo5.txt', 'hola soy un archivo que será borrado por la fnc borrar',console.log)


borrar(__dirname+'/archivo4.txt',console.log);