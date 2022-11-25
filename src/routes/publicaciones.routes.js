const express = require('express');

/* const checkRoleAuth = require ('../middleware/roleAuth.middleware')  */
const checkAuth = require ('../middleware/auth.middleware')

const { 
    postPublicacion,
    getPublicaciones,
    getPublicacion,
    putPublicacion,
    deletePublicacion,
    postComentario,
    getComentario,
    deleteComentario
} = require ('../controllers/publicaciones.controllers.js');

const router = express.Router();

//RUTAS PUBLICACIONES

//agregar un publicacion
router.post ('/publicacion',checkAuth, postPublicacion); 

//obtener todas las publicaciones del sistema
router.get ('/publicaciones', getPublicaciones);

//obtener todas las publicaciones de un usuario
router.get ('/publicacion/:id', getPublicacion);

//actualizar una publicacion
router.put ('/publicacion/:id', putPublicacion);

//eliminar una publicacion
router.delete ('/publicacion/:id', deletePublicacion );



//RUTAS DE COMENTARIOS DE PUBLICACIONES

//agregar un comentario a una publicacion
router.post ('/comentar/:id',checkAuth, postComentario); 

//mostrar un comentario especifico
router.get ('/comentario/:id', getComentario); 

//eliminar un comentario especifico de una publicacion
router.delete ('/comentario/:id/:comment_id', deleteComentario); 



module.exports = router;