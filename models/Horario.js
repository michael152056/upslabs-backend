const mongoose = require('mongoose');
const HorarioSchema = mongoose.Schema({
    correo: {
        type: String
    },
    nombres: {
        type: String
    },
    reserva: {
        type: String
    },
    cargo: {
        type: String
    },
    carrera:{
        type: String
    }
    ,
    nivel:{
        type: String
    }
    ,
    materia:{
        type: String
    },
    cantidad_estudiantes:{
        type: String
    },
    fecha:{
        type: String
    },
    hora:{
        type: String
    },
    actividades:{
        type: String
    },
    tipo_reserva:{
        type: String
    },
    cedula:{
        type: String
    },
    estado:{
        type: String
    }




});

module.exports = mongoose.model('Horario',HorarioSchema);