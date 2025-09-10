const express = require('express')
const app = express ()
const port = 3000
app.get('/',(req, res) =>{
    res.send('¡hola, Sebas por que no vinisteeee???')
});


app.listen(port, () =>{
    console.log('La aplicación se está ejecutando por el puesto' + port)

}) ;



