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
    dni: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuarios', usuarioSchema);