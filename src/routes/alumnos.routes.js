const express = require('express');

const { 
    postAlumnos,
    getAlumnos,
    getAlumno,
    putAlumno,
    deleteAlumno,
} = require ('../controllers/alumnos.controllers');

const router = express.Router();

//agregar un alumno
router.post ('/alumnos', postAlumnos );

//obtener todos los alumnos
router.get ('/alumnos', getAlumnos);

//encontrar un alumno especifico
router.get ('/alumnos/:id', getAlumno);

//actualizar un alumno
router.put ('/alumnos/:id', putAlumno);

//eliminar un alumno
router.delete ('/alumnos/:id', deleteAlumno);




module.exports = router;