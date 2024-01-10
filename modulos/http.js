const http = require('http')

function router(req,res){
    console.log('nueva peticion')
    console.log(req.url);//traigo la url

    switch(req.url){
        case '/hola':
            res.write('hola que tal')
            res.end()
            break;

            default:
                res.write('error 404 no sé qué quieres')
                res.end()

    }

/*     res.writeHead(201, {'Content-Type': 'text/plain'})
    res.write('hola ,ya sé usar HTTP de nodejs')
    
    res.end(); */
}

http.createServer(router).listen(3000);
 //tenemos el servidor escuchando peticiones en el puerto 3000

 console.log("escuchando http en el puerto 3000")