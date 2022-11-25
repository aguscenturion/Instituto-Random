const express = require('express');

const checkRoleAuth = require ('../middleware/roleAuth.middleware')
const checkAuth = require ('../middleware/auth.middleware')

const { 
    postProfesores,
    getProfesores,
    getProfesore,
    putProfesore,
    deleteProfesore,
} = require ('../controllers/profesores.controllers.js');

const router = express.Router();

//agregar un profesor/a
router.post ('/profesores', checkAuth, checkRoleAuth([true]), postProfesores);

//obtener todos los Profesores
router.get ('/profesores',  checkAuth, checkRoleAuth([true]), getProfesores);

//encontrar un/a profesor/a por id
router.get ('/profesores/:id', checkAuth, checkRoleAuth([true]), getProfesore);

//actualizar un/a profesor/a
router.put ('/profesores/:id', checkAuth, checkRoleAuth([true]), putProfesore);

//eliminar un/a profesor/a
router.delete ('/profesores/:id', checkAuth, checkRoleAuth([true]), deleteProfesore);




module.exports = router;