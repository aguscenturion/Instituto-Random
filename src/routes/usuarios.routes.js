const express = require('express');

const { 
    postUsuarios, 
    getUsuarios,
    getUsuario,
    putUsuario,
    deleteUsuario,
} = require ('../controllers/usuarios.controllers.js')

const usuariosRoutes = express.Router();

//crear un usuario
usuariosRoutes.post ('/usuarios', postUsuarios );

//obtener todos los usuarios
usuariosRoutes.get ('/usuarios',getUsuarios);

//encontrar un usuario especifico
usuariosRoutes.get ('/usuarios/:id', getUsuario);

//actualizar un usuario
usuariosRoutes.put ('/usuarios/:id', putUsuario);

//eliminar un usuario
usuariosRoutes.delete ('/usuarios/:id', deleteUsuario);





module.exports = usuariosRoutes;