const express = require('express');

const checkRoleAuth = require ('../middleware/roleAuth.middleware')
const checkAuth = require ('../middleware/auth.middleware')

const { 
    validarUsuario,
    validarParametro,
    validarId
 } = require('../validators/usuarios.validators')

const { 
    postAlumnos,
    getAlumnos,
    getAlumno,
    putAlumno,
    deleteAlumno,
} = require ('../controllers/alumnos.controllers');

const router = express.Router();

//agregar un alumno
router.post ('/alumnos', checkAuth, checkRoleAuth([true]), validarUsuario,  postAlumnos );

//obtener todos los alumnos
router.get ('/alumnos', checkAuth, checkRoleAuth([true]), getAlumnos);

//encontrar un alumno especifico
router.get ('/alumnos/:id', checkAuth, checkRoleAuth([true]), validarParametro, validarId, getAlumno);

//actualizar un alumno
router.put ('/alumnos/:id', checkAuth, checkRoleAuth([true]), validarId, putAlumno);

//eliminar un alumno
router.delete ('/alumnos/:id', checkAuth, checkRoleAuth([true]), validarId, deleteAlumno);




module.exports = router;