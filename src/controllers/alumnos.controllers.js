const usuariosModel = require ('../models/Usuarios.js')

const ctrlAlumnos = {};

//controlador de agregar un alumno
ctrlAlumnos.postAlumnos = (req, res) => {
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
                        alumno
                    }
                ],
                datosAlumnos:[
                    {
                        carrera,
                        analitico,
                        certificadoDomicilio
                    }
                ]
            }
        ],
    } = req.body
    const newAlumno = new usuariosModel({
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
                        alumno
                    }
                ],
                datosAlumnos:[
                    {
                        carrera,
                        analitico,
                        certificadoDomicilio
                    }
                ]
            }
        ],
    });
    newAlumno
        .save()
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de mostrar todos los alumnos
ctrlAlumnos.getAlumnos = (req, res) => {
    usuariosModel
        .find({
            "perfiles.tipo.alumno": true
        })
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador de encontrar un alumno especifico
ctrlAlumnos.getAlumno = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .findById(id)
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ message: error}));
}

//controlador para actualizar un alumno
ctrlAlumnos.putAlumno = (req, res) => {
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
                        alumno
                    }
                ],
                datosAlumnos:[
                    {
                        carrera,
                        analitico,
                        certificadoDomicilio
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
                            alumno
                        }
                    ],
                    datosAlumnos:[
                        {
                            carrera,
                            analitico,
                            certificadoDomicilio
                        }
                    ]
                }
            ],} })
        .then((datos) => res.json({
            msg:'Se actualizaron correctamente los datos del alumno',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}

//controlador para eliminar un alumno
ctrlAlumnos.deleteAlumno = (req, res) => {
    const { id } = req.params;
    usuariosModel
        .deleteOne({_id: id})
        .then((datos) => res.json({
            msg:'Se elimino correctamente el alumno',
            datos
        }))
        .catch((error) => res.json({ message: error}));
}



module.exports = ctrlAlumnos;