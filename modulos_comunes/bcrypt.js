const bcrypt = require('bcrypt')

const password = 'santi!';

bcrypt.hash(password, 5, function(err,hash){ //genero un hash a partir de mi contraseña
    console.log(hash)

    bcrypt.compare(password,hash, function (err,res){//verificacion de que el texto genere el hash correspondiente
       // console.log(err)
        console.log(res)
    })
});