const mongoose = require('mongoose');
const RegistradoSchema = mongoose.Schema({
    nombres: {
        type: String
    },
    correo: {
        type: String
    },
    clave: {
        type: String
    },
    ubicacion: {
        type: String
    },
    celular:{
        type: String
    },
    tipo:{
        type: String
    },
    cargo:{
        type: String
    },
    carrera:{
        type: String
    },
    cedula:{
        type: String
    }
});

module.exports = mongoose.model('Registrado',RegistradoSchema);

