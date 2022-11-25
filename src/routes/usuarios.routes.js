const express = require('express');

const checkRoleAuth = require ('../middleware/roleAuth.middleware')
const checkAuth = require ('../middleware/auth.middleware')

const {  
    getUsuarios
} = require ('../controllers/usuarios.controllers.js')

const usuariosRoutes = express.Router();

//obtener todos los usuarios
usuariosRoutes.get ('/usuarios', checkAuth, checkRoleAuth([true]), getUsuarios);

module.exports = usuariosRoutes;