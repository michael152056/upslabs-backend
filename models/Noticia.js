const mongoose = require('mongoose');
const NoticiaSchema = mongoose.Schema({
    titulo_noticia: {
        type: String
    },
    desc_noticia: {
        type: String
    },
    foto_noticia: {
        type: String
    },
    tipo_usuario: {
        type: String
    }
});

module.exports = mongoose.model('Noticia',NoticiaSchema);