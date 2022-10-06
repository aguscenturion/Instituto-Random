const express = require('express');

const { 
    postProfesores,
    getProfesores,
    getProfesore,
    putProfesore,
    deleteProfesore,
} = require ('../controllers/profesores.controllers.js');

const router = express.Router();

//agregar un profesor/a
router.post ('/profesores', postProfesores );

//obtener todos los Profesores
router.get ('/profesores', getProfesores);

//encontrar un/a profesor/a por id
router.get ('/profesores/:id', getProfesore);

//actualizar un/a profesor/a
router.put ('/profesores/:id', putProfesore);

//eliminar un/a profesor/a
router.delete ('/profesores/:id', deleteProfesore);




module.exports = router;