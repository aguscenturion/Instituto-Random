const usuariosModel = require ('../models/Usuarios.js')

const ctrlUsuarios = {};

//controlador de mostrar todos los usuarios
ctrlUsuarios.getUsuarios = (req, res) => {
    usuariosModel
        .find()
        .then((datos) => res.json({
            msg: 'Se mostraron correctamente todos los usuarios del sistema',
            datos
        }))
        .catch((error) => res.json({ 
            message: error
        }));
}

module.exports = ctrlUsuarios; 