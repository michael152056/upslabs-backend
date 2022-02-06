const express = require('express');
const Registrado = require('../models/Registrado');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/',(req,res) => res.send('Hello world'));

router.post('/signup', async (req, res) => {
    const {celular, clave, correo, nombres, tipo, ubicacion,cargo,carrera,cedula} = req.body;
    const newRegistrado = new Registrado({celular, clave, correo, nombres, tipo, ubicacion,cargo,carrera,cedula});
    await newRegistrado.save();

    const token = jwt.sign({_id: newRegistrado._id}, 'secretkey')
    res.status(200).json({token})
});

router.post('/signin', async (req, res) => {
    const {correo, clave} = req.body;
    const user = await Registrado.findOne({correo})
    if(!user) return res.status(401),send("El correo no existe");
    if(user.clave !== clave) return res.status(401).send("Contraseña Equivocada");

    const token = jwt.sign({_id: user._id}, 'secretkey')
    const tipo = user.tipo;
    const name = user.nombres;
    const email = user.correo;
    const ubicacion = user.ubicacion;
    const celular = user.celular;
    const contra = user.clave;

    const cargo = user.cargo;
    const carrera = user.carrera;
    const cedula = user.cedula;
    res.status(200).json({token, tipo, name,email,ubicacion,celular,contra,cargo,carrera,cedula})
});

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId);
})

module.exports = router;

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('No hay token de autorizacion');
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('No hay token de autorizacion');
    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
}