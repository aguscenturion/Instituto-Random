const usuariosModel = require ('../models/Usuarios.js')

const ctrlUsuarios = {};

//controlador de crear un usuario
ctrlUsuarios.postUsuarios = (req, res) => {
    const usuario = usuariosModel(req.body);
    usuario
        .save()
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de mostrar todos los usuarios
ctrlUsuarios.getUsuarios = (req, res) => {
    usuariosModel
        .find()
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de encontrar un usuario especifico
ctrlUsuarios.getUsuario = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .findById(id)
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador para actualizar un usuario
ctrlUsuarios.putUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, dni } = req.body;
    usuariosModel
        .updateOne({_id: id}, { $set: {nombre, apellido, dni} })
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador para eliminar un usuario
ctrlUsuarios.deleteUsuario = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .remove({_id: id})
        .then((datos) => res.json({
            msg:'Se elimino correctamente el usuario',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}



module.exports = ctrlUsuarios;