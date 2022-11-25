const usuariosModel = require ('../models/Usuarios.js')

const ctrlAdmin = {};

//controlador de agregar un administrador
ctrlAdmin.postAdmins = (req, res) => {
    const {
        nombre,
        apellido,
        email,
        dni,
        contrasenia,
        fotoPerfil,
        perfiles:[
            {
                tipo:[
                    {
                        admin
                    }
                ],
                datosAdmin:[
                    {
                        cargo
                    }
                ]
            }
        ],
    } = req.body
    const newAdmin = new usuariosModel({
        nombre,
        apellido,
        email,
        dni,
        contrasenia,
        fotoPerfil,
        perfiles:[
            {
                tipo:[
                    {
                        admin
                    }
                ],
                datosAdmin:[
                    {
                        cargo
                    }
                ]
            }
        ],
    });
    newAdmin
        .save()
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de mostrar todos los administradores
ctrlAdmin.getAdmins = (req, res) => {
    usuariosModel
        .find({
            "perfiles.tipo.admin": true
        })
        .then((datos) => res.json({
            msg:'Se mostraron correctamente los datos de los administradores',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}

//controlador de encontrar un administrador especifico
ctrlAdmin.getAdmin = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .findById(id)
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador para actualizar un administrador
ctrlAdmin.putAdmin = (req, res) => {
    const { id } = req.params;
    const { 
        nombre,
        apellido,
        email,
        dni,
        contrasenia,
        fotoPerfil,
        perfiles:[
            {
                tipo:[
                    {
                        admin
                    }
                ],
                datosAdmin:[
                    {
                        cargo
                    }
                ]
            }
        ],
    } = req.body;
    usuariosModel
        .updateOne({_id: id}, { $set: {
            nombre,
            apellido,
            email,
            dni,
            contrasenia,
            fotoPerfil,
            perfiles:[
                {
                    tipo:[
                        {
                            admin
                        }
                    ],
                    datosAdmin:[
                        {
                            cargo
                        }
                    ]
                }
            ],} })
        .then((datos) => res.json({
            msg:'Se actualizaron correctamente los datos del administrador',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}

//controlador para eliminar un administrador
ctrlAdmin.deleteAdmin = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .deleteOne({_id: id})
        .then((datos) => res.json({
            msg:'Se elimino correctamente el administrador',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}



module.exports = ctrlAdmin;