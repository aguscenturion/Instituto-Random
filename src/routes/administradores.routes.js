const express = require('express');

const { 
    postAdmins,
    getAdmins,
    getAdmin,
    putAdmin,
    deleteAdmin,
} = require ('../controllers/administradores.controllers.js');

const router = express.Router();

//agregar un administrador
router.post ('/administradores', postAdmins );

//obtener todos los administradores
router.get ('/administradores', getAdmins);

//encontrar un administrador especifico
router.get ('/administradores/:id', getAdmin);

//actualizar un administrador especifico
router.put ('/administradores/:id', putAdmin);

//eliminar un administrador especifico
router.delete ('/administradores/:id', deleteAdmin);




module.exports = router;