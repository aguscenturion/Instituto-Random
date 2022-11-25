const express = require('express');

const { 
    postMateria,
    getMaterias,
    getMateria,
    putMateria,
    deleteMateria,
    postNota
} = require ('../controllers/materias.controllers.js');

const router = express.Router();

//MATERIAS

//agregar una materia
router.post ('/materia', postMateria);

//obtener todas los materias
router.get ('/materias', getMaterias);

//encontrar una materia
router.get ('/materia/:id', getMateria);

//actualizar una materia
router.put ('/materia/:id', putMateria);

//eliminar una materia
router.delete ('/materia/:id', deleteMateria);

//NOTAS DE MATERIAS ALUMNOS
//agregar notas de un alumno en una materia
router.post ('/notas', postNota);



module.exports = router;