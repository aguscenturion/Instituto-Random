const mongoose = require ('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },

    fotoPerfil:{
        type: String,
        required: true
    },
    perfiles: [
        {
            tipo: [
                {
                    alumno:{
                        type: Boolean,
                        default: false
                    },
                    profesore:{
                        type: Boolean,
                        default: false
                    },
                    admin:{
                        type: Boolean,
                        default: false
                    },
                }
            ],
            datosAlumnos:[
                {
                    carrera:{
                        type: String
                    }, 
                    analitico: {
                        type: String
                    },
                    certificadoDomicilio: {
                        type: String
                    },
                }
            ],
            datosProfesores:[
                {
                    titulo:{
                        type: String
                    }, 
                }
            ],
            datosAdmin:[
                {
                    cargo:{
                        type: String
                    }, 
                }
            ],
        },
    ],
    activo: {
        type: Boolean,
        default: true
    }
});

/* usuarioSchema.set('toJSON', {
    transform: (document, returnedObject ) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v   
    }
}) */

        

module.exports = mongoose.model('usuariosModel', usuarioSchema);