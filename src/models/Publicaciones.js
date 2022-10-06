const mongoose = require ('mongoose');

const publicacionesSchema = mongoose.Schema(
    {
        autorNombre: {
            type: Schema.Types.ObjectId,
            ref: "User",
            },
        tipo: {
            type: String,
            required: true,
            },
        contenido: {
            type: String,
            required: true,
            },
        fecha: {
            type: Date,
            required: true,
            },
        imagenURL: {
            type: String,
            },
        comentarios: [
            {
            autor: {
                type: Schema.Types.ObjectId,
                ref: "User",
                },
            descripcion: {
                type: String,
                required: true,
                },
            },
        ]
    }
)


module.exports = mongoose.model('Publicaciones', publicacionesSchema);