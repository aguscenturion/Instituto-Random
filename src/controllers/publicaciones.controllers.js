const publicacionesModelo = require ('../models/Publicaciones')

const ctrlPublicaciones = {};


//PUBLICACIONES 

//controlador de agregar una publicacion
ctrlPublicaciones.postPublicacion = (req, res) => {
    const {
        tipo,
        contenido,
        fotoPortada,
    } = req.body

    const autorNombre = req.usuario._id

    const newPublicacion = new publicacionesModelo({
        autorNombre,
        tipo,
        contenido,
        fotoPortada
    })
    newPublicacion
        .save()
        .then((datos) => res.json({
           
            datos
        }))
        .catch((error) => res.json({
            message: "Error al crear lae publicacion",
            message: error
        }));
}

//controlador para mostrar todas las publicaciones
ctrlPublicaciones.getPublicaciones = (req, res) => {
    publicacionesModelo
        .find()
        .populate('autorNombre',["nombre","apellido","fotoPerfil"])
        .then((datos) => res.json(
           
            datos
        ))
        .catch((error) => res.json({ 
            message: "Error al mostrar las publicaciones",
            message: error
        }));
}

//controlador para mostrar una publicacion especifica
ctrlPublicaciones.getPublicacion = (req, res) => {
    const { id } = req.params;
    publicacionesModelo
        .findById(id)
        .populate('autorNombre',["nombre","apellido","fotoPerfil"])
        .then((datos) => res.json({
            msg: 'Se mostro correctamente la publicacion',
            datos
        }))
        .catch((error) => res.json({ 
            message: "Error al mostrar la publicacion",
            error
        }));
    }

//controlador para actualizar una publicacion
ctrlPublicaciones.putPublicacion = (req, res) => {
    const { id } = req.params;
    const {
        contenido,
        fotoPortada
    } = req.body

    publicacionesModelo
    
        .findByIdAndUpdate({_id : id}, { $set: {
            contenido,
            fotoPortada
        }})
        .then((datos) => res.json({
            msg:'Se actualizo correctamente la publicacion',
            datos
        }))
        .catch((error) => res.json({
            msg: "Error al actualizar la publicacion",
            error
        }));
}

//controlador para eliminar una publicacion permanente de la base de datos
ctrlPublicaciones.deletePublicacion = (req, res) => {
    const { id } = req.params;
    publicacionesModelo
        .deleteOne({id}) 
        .then((datos) => res.json({
            msg: 'Se elimino correctamente la publicacion',
            datos
        }))
        .catch((error) => res.json({ 
            message: "Error al eliminar la publicacion",
            error
        }));
}


//COMENTARIOS DE PUBLICACIONES

//controlador para crear un comentario en una publicacion
ctrlPublicaciones.postComentario = async (req, res, next) =>{
    const { id } = req.params

    const publicacion = await publicacionesModelo.findById(id)

    if(!publicacion){
        res.status(404).json({
            msg:'No existe la publicacion'
    })}

    const { 
        descripcion
    } = req.body

    const autor = req.usuario._id;

    const nuevoComentario = {
        autor,
        descripcion
    }

    await publicacion.comentarios
        .unshift(nuevoComentario) 

    await publicacion
        .save()
        .then((datos) => res.json({
            msg: 'Comentario Realizado',
            datos
        }))
        .catch((error) => res.json({ 
            message: "Error al comentar",
            error
        }));
}

//controlador para mostrar los comentarios de una publicacion
ctrlPublicaciones.getComentario = async (req, res) => {
    /* const { id } = req.params;
    console.log(id)
    publicacionesModelo
        .findById(id)
        .populate('comentarios.autor',["nombre","apellido","fotoPerfil"])
        .then((datos) => res.json({
            msg: 'Se mostro correctamente el comentario',
            datos
        }))
        .catch((error) => res.json({ 
            message: "Error al mostrar el comentario",
            error
        })); */

        
    const {id} = req.params

    const publicacion = await publicacionesModelo.findById(id).populate('comentarios.autor',["nombre","apellido","fotoPerfil"])

    if(!publicacion){
        res.status(404).json({
            msg:'No existe la publicacion'
        })}

    // Respuesta del servidor
    res.json(publicacion.comentarios); 
}

//controlador para eliminar un comentario permanente de la base de datos
ctrlPublicaciones.deleteComentario = async (req, res) =>{
    const { id } = req.params

    try {
        // Ejecución normal del programa
        const publicacion = await publicacionesModelo.findById(id)
        //console.log(publi)
        if(!publicacion) return res.status(404).json({msg:'La Publicacion No Existe'})

        const comentario = await publicacion.comentarios.find(comentario => comentario.id === req.params.comment_id)
    
        if(!comentario) return res.status(404).json({msg: 'El comentario no existe'})
        
            function removeIndex(list){
                for (let i=0; i < list.length; i++){
                  if (list[i].id === req.params.comment_id){return i}
                }
              }
           
       
        //console.log(indece)
        const remove = removeIndex(publicacion.comentarios)
        publicacion.comentarios.splice(remove,1)

        await publicacion.save(publicacion)
        return res.json({
            msg: "Comentario eliminado"
        })
        
        

    } catch (error) {
        // Si ocurre un error 
        console.log('Error al eliminar el comentario: ', error)
    }
}

module.exports = ctrlPublicaciones;