const { Schema, model } = require('mongoose');

const userSchema  = new Schema({
    celular: String,
    clave: String,
    correo: String,
    nombres: String,
    tipo: String,
    ubicacion: String
}, {
    timestamps: true
});

module.exports = model('user', userSchema);