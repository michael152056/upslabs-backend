const express = require('express');

const bodyparser = require('body-parser');
const cors = require("cors");

//Creación de servidor

const app = express();
require('./config/db');
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index'))
app.use('/api/productos',require('./routes/producto'));
app.use('/api/eventos',require('./routes/evento'));
app.use('/api/registrados',require('./routes/registrado'));
app.use('/api/horarios',require('./routes/horario'));
app.use('/api/noticias',require('./routes/noticia'));
app.use('/api/equipos',require('./routes/equipo'));

app.use('/api/correo',require('./routes/correo'));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.listen(4000,() => 
{
    console.log("El servidor está corriendo")
})

