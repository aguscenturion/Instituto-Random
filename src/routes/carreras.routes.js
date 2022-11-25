const express = require('express');

const { 
    postCarreras,
    getCarreras,
    getCarrera,
    putCarrera,
    deleteCarrera,
} = require ('../controllers/carreras.controllers.js');

const router = express.Router();

//agregar un carrera
router.post ('/carrera', postCarreras);

//obtener todos los carreras
router.get ('/carreras',   getCarreras);

//encontrar una carrera
router.get ('/carrera/:id', getCarrera);

//actualizar una carrera
router.put ('/carrera/:id', putCarrera);

//eliminar una carrera
router.delete ('/carrera/:id', deleteCarrera);


module.exports = router;