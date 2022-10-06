const mongoose = require ('mongoose');

const carrerasSchema = mongoose.Schema(
    {
        nombreCarrera: {
            type: String,
            required: true,
            },
        activo: {
            type: Boolean,
            default: true,
            },
    }
)




module.exports = mongoose.model('Carreras', carrerasSchema);