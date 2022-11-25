const carrerasModel = require ('../models/Carreras.js')

const ctrlCarreras = {};

//controlador de agregar una carrera
ctrlCarreras.postCarreras = (req, res) => {
    const {
        nombreCarrera
    } = req.body
    const newCarrera = new carrerasModel({
        nombreCarrera
    });
    newCarrera
        .save()
        .then((datos) => res.json({
            msg: "Carrera agregada correctamente",
            datos
        }))
        .catch((error) => res.json({ message: error}));
}

//controlador de mostrar todas las carreras
ctrlCarreras.getCarreras = (req, res) => {
    carrerasModel
        .find()
        .then((datos) => res.json({
            msg: "Carreras mostradas correctamente",
            datos}))
        .catch((error) => res.json({ message: error}));
}

//controlador de encontrar una carrera especifica
ctrlCarreras.getCarrera = (req, res) => {
    const { id } = req.params;
    carrerasModel
        .findById(id)
        .then((datos) => res.json({
            msg: "Carrera mostrada correctamente",
            datos}))
        .catch((error) => res.json({ message: error}));
}

//controlador para actualizar una carrera
ctrlCarreras.putCarrera = (req, res) => {
    const { id } = req.params;
    const { 
        nombreCarrera
    } = req.body;
    carrerasModel
        .updateOne({_id: id}, { $set: {
            nombreCarrera
        } })
        .then((datos) => res.json({
            msg:'Se actualizo correctamente la carrera',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}

//controlador para eliminar un alumno
ctrlCarreras.deleteCarrera = (req, res) => {
    const { id } = req.params;
    carrerasModel
        .deleteOne({_id: id})
        .then((datos) => res.json({
            msg:'Se elimino correctamente la carrera',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}



module.exports = ctrlCarreras;