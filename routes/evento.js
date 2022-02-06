//Rutas para evento
const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController')


// api/eventos
router.post('/',eventoController.crearEvento);
router.get('/',eventoController.obtenerEventos);
router.put('/:id',eventoController.actualizarEvento);
router.get('/:id',eventoController.obtenerEvento);
router.delete('/:id',eventoController.eliminarEvento)

module.exports = router;
