const Usuarios = require ('../models/Usuarios.js')

const ctrlUsuarios = {};

//controlador de crear un usuario
ctrlUsuarios.postUsuarios = (req, res) => {
    const usuario = Usuarios(req.body);
    usuario
        .save()
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de mostrar todos los usuarios
ctrlUsuarios.getUsuarios = (req, res) => {
    Usuarios
        .find()
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de encontrar un usuario especifico
ctrlUsuarios.getUsuario = (req, res) => {
    const { id } = req.params;
    Usuarios
        .findById(id)
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador para actualizar un usuario
ctrlUsuarios.putUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, dni } = req.body;
    Usuarios
        .updateOne({_id: id}, { $set: {nombre, apellido, dni} })
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador para eliminar un usuario
ctrlUsuarios.deleteUsuario = (req, res) => {
    const { id } = req.params;
    Usuarios
        .remove({_id: id})
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}



module.exports = ctrlUsuarios;