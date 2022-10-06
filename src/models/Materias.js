const mongoose = require ('mongoose');

const materiasSchema = mongoose.Schema(
  {
    descripcionMateria: {
        type: String,
        require: true,
        },
    profTitular: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
    profAux: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
    carrera: {
        type: Schema.Types.ObjectId,
        ref: "Carreras"
        },
    anio: {
        type: String,
        required: true
        },
    horarioIncio: {
        type: String,
        require: true,
        },
    horarioFinal: {
        type: String,
        require: true,
        },
    notas:[
        {
            Alumno: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
                },
            parcial1:{
                type: String,
                require: true,
                },
            parcial2:{
                type: String,
                require: true,
                },
            parcial3:{
                type: String,
                require: true,
                },
            recuperatorio:{
                type: String,
                require: true,
                },
            final:{
                type: String,
                require: true,
                },
            estado:{
                type: String,
                require: true,
                },
        }
    ],
    inasistencia: [
    {
      dia: {
        type: Date,
        },
      idUser:{
        type: Schema.Types.ObjectId,
        ref: "User",
        },
    },
  ],
    activo: {
        type: Boolean,
        default: true
        }
}
)



module.exports = mongoose.model('Materias', materiasSchema);