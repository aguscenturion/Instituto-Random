const materiasModel = require ('../models/Materias.js')

const ctrlMaterias = {};

//controlador de agregar una materia
ctrlMaterias.postMateria = (req, res) => {
    const {
        nombreMateria,
        profTitular,
        profAux,
        carrera,
        anio,
        horarioIncio,
        horarioFinal
    } = req.body
    const newMateria = new materiasModel({
        nombreMateria,
        profTitular,
        profAux,
        carrera,
        anio,
        horarioIncio,
        horarioFinal
    });
    newMateria
        .save()
        .then((datos) => res.json({
            msg: "Materia agregada correctamente",
            datos
        }))
        .catch((error) => res.json({ 
            msg: "Error al agregar la materia",
            error
        }));
}

//controlador de encontrar todas las materias
ctrlMaterias.getMaterias = (req, res) => {
    materiasModel
        .find()
        .populate("profTitular", ["nombre", "apellido", "fotoPerfil"])
        .populate("profAux", ["nombre", "apellido", "fotoPerfil"])
        .populate("carrera", ["nombreCarrera" ])
        .then((datos) => res.json({
            msg: "Materias mostradas correctamente",
            datos}))
        .catch((error) => res.json({ 
            msg: "Error al mostrar las materias", 
            error
        }));
}

//controlador de encontrar una materia especifica
ctrlMaterias.getMateria = (req, res) => {
    const { id } = req.params;
    materiasModel
        .findById(id)
        .populate("profTitular", ["nombre", "apellido", "fotoPerfil"])
        .populate("profAux", ["nombre", "apellido", "fotoPerfil"])
        .populate("carrera", ["nombreCarrera" ])
        .then((datos) => res.json({
            msg: "Materia mostrada correctamente",
            datos}))
        .catch((error) => res.json({ 
            msg: "Error al mostra la materia", 
            error
        }));
}

//controlador para actualizar una materia
ctrlMaterias.putMateria = (req, res) => {
    const { id } = req.params;
    const { 
        nombreMateria,
        profTitular,
        profAux,
        carrera,
        anio,
        horarioIncio,
        horarioFinal
    } = req.body;
    materiasModel
        .updateOne({_id: id}, { $set: {
            nombreMateria,
            profTitular,
            profAux,
            carrera,
            anio,
            horarioIncio,
            horarioFinal
        } })
        .then((datos) => res.json({
            msg:'Se actualizo correctamente la materia',
            datos
            
        }))
        .catch((error) => res.json({ 
            msg:'Error al actualizar la materia',
            error
        }));
}

//controlador para eliminar una materia
ctrlMaterias.deleteMateria = (req, res) => {
    const { id } = req.params;
    materiasModel
        .deleteOne({_id: id})
        .then((datos) => res.json({
            msg:'Se elimino correctamente la materia',
            datos
        }))
        .catch((error) => res.json({
            msg:'Error al eliminar la materia',
            error
        }));
}

//NOTAS DE ALUMNOS EN MATERIAS

//controlador de agregar notas a un alumno en una materia
ctrlMaterias.postNota = (req, res) => {
    const { id } = req.params

    const materia = materiasModelo.findById(id)
    

    if (!materia) {
        res.status(404).json({ msg: "La Materia no existe" });
      }

    const {
        Alumno,
        parcial1,
        parcial2,
        parcial3,
        recuperatorio,
        final,
        estado
    } = req.body
    const newNota = {
        Alumno,
        parcial1,
        parcial2,
        parcial3,
        recuperatorio,
        final,
        estado,
    }
    console.log(newNota)
    materia.notas.unshift(newNota)
    materia
        .save()
        .then((datos) => res.json({
            msg: "Datos agregados correctamente",
            datos
        }))
        .catch((error) => res.json({ 
            msg: "Error al agregar los datos",
            error
        }));
}



module.exports = ctrlMaterias;