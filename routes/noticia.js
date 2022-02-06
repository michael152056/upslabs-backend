//Rutas para noticia
const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController')


// api/noticias
router.post('/',noticiaController.crearNoticia);
router.get('/',noticiaController.obtenerNoticias);
router.put('/:id',noticiaController.actualizarNoticia);
router.get('/:id',noticiaController.obtenerNoticia);
router.delete('/:id',noticiaController.eliminarNoticia)

module.exports = router;
