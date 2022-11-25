const express = require('express');

const checkRoleAuth = require ('../middleware/roleAuth.middleware')
const checkAuth = require ('../middleware/auth.middleware')

const { 
    postAdmins,
    getAdmins,
    getAdmin,
    putAdmin,
    deleteAdmin,
} = require ('../controllers/administradores.controllers.js');

const router = express.Router();

//agregar un administrador
router.post ('/administradores', checkAuth, checkRoleAuth([true]), postAdmins);

//obtener todos los administradores
router.get ('/administradores', checkAuth, checkRoleAuth([true]), getAdmins);

//encontrar un administrador especifico
router.get ('/administradores/:id', checkAuth, checkRoleAuth([true]), getAdmin);

//actualizar un administrador especifico
router.put ('/administradores/:id', checkAuth, checkRoleAuth([true]), putAdmin);

//eliminar un administrador especifico
router.delete ('/administradores/:id', checkAuth, checkRoleAuth([true]), deleteAdmin);




module.exports = router;