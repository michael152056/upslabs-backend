const mongoose = require('mongoose');
const EquipoSchema = mongoose.Schema({
    codigo: {
        type: String
    },
    equipo: {
        type: String
    },
    modelo: {
        type: String
    },
    marca: {
        type: String
    },
    serie:{
        type: String
    }
    ,
    ubicacion:{
        type: String
    }
    ,
    estado:{
        type: String
    }
});

module.exports = mongoose.model('Equipo',EquipoSchema);