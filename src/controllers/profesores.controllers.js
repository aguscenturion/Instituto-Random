const usuariosModel = require ('../models/Usuarios.js')

const ctrlProfesores = {};

//controlador de agregar un profesor
ctrlProfesores.postProfesores = (req, res) => {
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
                        profesore
                    }
                ],
                datosProfesores:[
                    {
                        titulo
                    }
                ]
            }
        ],
    } = req.body
    const newProfesore = new usuariosModel({
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
                        profesore
                    }
                ],
                datosProfesores:[
                    {
                        titulo
                    }
                ]
            }
        ],
    });
    newProfesore
        .save()
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de mostrar todos los profesores
ctrlProfesores.getProfesores = (req, res) => {
    usuariosModel
        .find({
            "perfiles.tipo.profesore": true
        })
        .then((datos) => res.json({
            msg:'Se mostraron correctamente los datos del/la profesor/a',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}

//controlador de encontrar un/a profesor/a 
ctrlProfesores.getProfesore = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .findById(id)
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador para actualizar un profesor/a
ctrlProfesores.putProfesore = (req, res) => {
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
                        profesore
                    }
                ],
                datosProfesores:[
                    {
                        titulo
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
                            profesore
                        }
                    ],
                    datosProfesores:[
                        {
                            titulo
                        }
                    ]
                }
            ],} })
        .then((datos) => res.json({
            msg:'Se actualizaron correctamente los datos del/la profesor/a',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}

//controlador para eliminar un alumno
ctrlProfesores.deleteProfesore = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .deleteOne({_id: id})
        .then((datos) => res.json({
            msg:'Se elimino correctamente el profesor/a',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}



module.exports = ctrlProfesores;