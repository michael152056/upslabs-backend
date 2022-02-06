//Rutas para registrado
const express = require('express');
const router = express.Router();
const registradoController = require('../controllers/registradoController')


// api/registrados
router.post('/',registradoController.crearRegistrado);
router.get('/',registradoController.obtenerRegistrados);
router.put('/:correo',registradoController.actualizarRegistrado);
router.get('/:correo/:ci',registradoController.obtenerRegistradosCedula);
router.get('/:correo',registradoController.obtenerRegistrado);
router.delete('/:id',registradoController.eliminarRegistrado)

module.exports = router;
