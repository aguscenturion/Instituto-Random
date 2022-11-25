const { TokenExpiredError } = require('jsonwebtoken')
const { verifyToken } = require('../helpers/generateToken')
const userModel = require('../models/Usuarios')

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.header('token')
        const tokenData = await verifyToken(token)
        const userData = await userModel.findById(tokenData._id) 

        if([].concat(roles).includes(userData.perfiles[0].tipo[0].admin)) {
            next()
        }else {
            res.status(409)
            res.send({
                error: 'No tienes permisos de Administrador'
            })
        }
    

    }catch(err) {

    }
}

module.exports = checkRoleAuth