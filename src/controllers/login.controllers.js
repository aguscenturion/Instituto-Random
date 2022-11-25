/* const { httpError } = require('../helpers/handleError') */
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const { sendToken } = require ("../middleware/sendToken");

const userModel = require('../models/Usuarios');

const loginCtrl = async (req, res) => {
    console.log(req.body)
    const { dni, contrasenia } = req.body
    try {
       
        const user = await userModel.findOne({ dni, contrasenia })
        const admin = user.perfiles[0].tipo[0].admin
        const datos = user.nombre 
       

        if (!user) {
            res.status(404)
            res.send({
                error: 'Usuario o contraseña no validos'
            })
        } else if ((user) && (admin === true)){
            const token = await tokenSign(user)
            res.send(
                    {token}
            )
        } else {
            const token = await tokenSign(user)
            res.send(
                {token}
            )
        }


            
            
   
        /* const checkPassword = await compare(password, user.password) */

        

    
        

        /* if (checkPassword && (user.role === 'user')) {
            res.send({
                msg: 'Logueado correctamente como usuario',
                data: user,
                tokenSession
            })
            return
        } else if (checkPassword && (user.role === 'admin')){
                res.send({
                    msg: 'Logueado correctamente como admin',
                    data: user,
                    tokenSession
                })
                return
        } else {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        } */
        }catch(err) {
        err
    }

}
const loginNative = async (req, res) => {
    console.log(req.body)
    const { dni, contrasenia } = req.body
    try {
       
        const user = await userModel.findOne({ dni, contrasenia })
        console.log(user)
        /* const datos = user.nombre  */
       

        if (!user) {
            res.status(404)
            res.send({
                error: 'Usuario o contraseña no validos'
            })
        } else {
            const token = await tokenSign(user)
            res.send({
                token,
                user
            })
        }
        }catch(err) {
        console.log(err)
        res.status(500).json({
            msg:"Erro db"
        })
    }

}

const getMyProfile = async (req, res) => {
    try {
      const usuario = await userModel.findById(req.usuario.id);   
      res.send({ 
        msg: `Welcome back ${usuario.nombre}`, 
    })

    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

const loginUser = async (req, res) => {
    console.log(req.usuario)
    try {
        const user = await userModel.findById(req.usuario.id).select('-contrasenia')
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
}

const registerCtrl = async (req, res) => {
    try {
        const { nombre, apellido, dni, password } = req.body
        const passwordHash = await encrypt(password)
        const registerUser = await userModel.create({
            nombre,
            apellido,
            dni,
            password: passwordHash
        })

        res.send({ 
            msg: 'Registrado correctamente',
            data: registerUser
            
        })
    } catch (err) {
        err
    }
}

module.exports = { loginCtrl, registerCtrl, loginUser, getMyProfile, loginNative }