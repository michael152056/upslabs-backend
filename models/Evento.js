const mongoose = require('mongoose');
const EventoSchema = mongoose.Schema({
    titulo_evento: {
        type: String
    },
    tipo_evento: {
        type: String
    },
    desc_evento: {
        type: String
    },
    dia_evento: {
        type: String
    },
    mes_evento:{
        type: String
    }
    ,
    ano_evento:{
        type: String
    }
    ,
    imagen_evento:{
        type: String
    }
    ,
    hora:{
        type: String
    }
    ,
    ponente:{
        type: String
    }



});

module.exports = mongoose.model('Evento',EventoSchema);