const { param, check } = require ('express-validator')
const { validarCampos } = require ('../helpers/validarCampos.js');
const usuariosModel = require ('../models/Usuarios.js')

const validarParametro = [
  param('id')
  .isMongoId()
  .withMessage("ID ingresada no valida"),
  (req, res, next) => {
    validarCampos(req, res, next) 
}
];

const validarId = [
  param('id')
 .custom(
    async (_id) => {
      const buscarId = await usuariosModel.count({_id});
      console.log(buscarId)
      if (buscarId === 0) {
        return Promise.reject("ID ingresado no existe en la base de datos");
      }
    }),
  (req, res, next) => {
    validarCampos(req, res, next) 
}
];



const validarUsuario = [
    check('nombre')
        .notEmpty().withMessage("El NOMBRE es obligatorio, verifique")
        .not().isNumeric().withMessage("Solo se permiten letras"),

    check('apellido')
        .notEmpty().withMessage("El APELLIDO es obligatorio, verifique")
        .not().isNumeric().withMessage("Solo se permiten letras"),

    check('email')
        .notEmpty().withMessage("El EMAIL es obligatorio, verifique")
        .isEmail().withMessage("EMAIL ingresado incorrecto, verifique")
        .custom(
            async (email) => {
              const buscarEmail = await usuariosModel.count({email});
              if (buscarEmail > 0) {
                return Promise.reject("El correo electronico ingresado ya esta en uso");
              }
            }),

    check('dni')
        .notEmpty().withMessage("El DNI es obligatorio, verifique")
        .isNumeric().withMessage("El DNI debe ser solo numeros, verifique")
        .custom(
            async (dni) => {
              const buscarDni = await usuariosModel.count({dni});
              if (buscarDni > 0) {
                return Promise.reject("El DNI ingresado ya esta en uso");
              }
            }),

    check('contrasenia')
        .notEmpty().isEmpty().withMessage("La CONTRASEÑA es obligatoria, verifique"),

    (req, res, next) => {
        validarCampos(req, res, next) 
    }
]

module.exports = { validarId, validarParametro, validarUsuario }