const { Schema, model } = require ('mongoose');

const publicacionesSchema = new Schema(
    {
        autorNombre: {
            type: Schema.Types.ObjectId,
            ref: "usuariosModel",
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
            default: Date.now(),
            },
        fotoPortada: {
            type: String,
            },
        comentarios: [
            {
            autor: {
                type: Schema.Types.ObjectId,
                ref: "usuariosModel",
                },
            descripcion: {
                type: String,
                },
            fechaComentario: {
                type: Date,
                default: Date.now()
            },
            },
            {
                timestamps: true,
            }
        ]
    }
)


module.exports = model('Publicaciones', publicacionesSchema);