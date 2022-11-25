
const { verifyToken } = require('../helpers/generateToken')
const usuariosModel = require ('../models/Usuarios.js')

const checkAuth = async (req, res, next) => {
    try {
        //TODO: authorization: Bearer 1010101010101001010100 
        const token = req.header('token')//TODO:123123213
        const tokenData = await verifyToken(token)
        if(!tokenData){
            return res.status(401).json({
                msg: 'Token Inválido o Expirado'
            });
        }

         //buscar usuario en la base de datos
         const user = await usuariosModel.findById(tokenData);


         //Se valida el usuario
         if(!user){
            return res.status(401).json({
                msg: 'Token Inválido (no existe el usuario)' 
            });
         }
        // console.log(req.usuario)
        // Se añaden los datos del usuario a la petición.
         req.usuario = user;
        // Continuar al siguiente middleware
         next();
    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Token Invalido' })
    }

}

module.exports = checkAuth