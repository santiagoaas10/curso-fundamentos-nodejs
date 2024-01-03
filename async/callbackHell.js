function hola(nombre,micallback){
    setTimeout(function () {
        console.log('hola, '+ nombre)
        micallback(nombre)
    }, 1500);
}

function hablar(callbackhablar){
    setTimeout(function(){
        console.log('blablabla...');
        callbackhablar();
    },1000)
}

function adios(nombre,otrocallback){
    setTimeout(function(){
        console.log('adios',nombre)
        otrocallback();
     },1000);
}

function conversacion(nombre, veces, callback){
    if (veces>=0)
    {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }else
    {
        adios(nombre,callback)
    }
}

//solucion del callbackhell
console.log('inciando proceso')
hola("santi",function(nombre)
    {
        conversacion(nombre,3, function()
        {
            console.log("proceso terminado");
        })
    }
    )

    
//..
//callbackhell
/* 
console.log('inciando proceso')
hola("santi",function(nombre){
    hablar(function(){
        hablar(function(){
            adios(nombre, function(){
                console.log('terminando proceso..')
            });
        });
    });
    
}); */