function otrafnc(){
     serompe()
}

function serompe(){
    return 3+z ;
}

function serompeasincrono(){
    setTimeout(function(){
        try{
           return 3+z;
        } catch(err){
            console.error('detecte ruptura en asincrono')
            console.error(err)
            console.log('se captura ruptura en asincrono')
            
        }
    },1000)
}
/* 
try{
    otrafnc()
} catch(err){
    console.error('vaya, algo se ha roto')
    console.error(err)
    console.log('pero no pasa nada lo hemos capturado')
}
 */
let m=serompeasincrono()


