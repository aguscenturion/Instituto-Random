# **MODELO DE BASE DE DATOS**


####  **USUARIOS**
```js
{
    nombre: {
        type: String,
        required: true
        },
    apellido: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true
        },
    dni: {
        type: String,
        required: true
        },
    contrasenia: {
        type: String,
        required: true
        },
    fotoPerfil:{
        type: String,
        required: true
    },
    Perfiles [
        {
            tipo: [
                {
                    alumno:{
                        type: Boolean,
                        default: true
                        },
                    profesor:{
                        type: Boolean,
                        default: false
                        },
                    admin:{
                        type: Boolean,
                        default: false
                        },
                }
            ],
            datosAlumnos:[
                {
                    carrera:{
                        type: String
                        }, 
                    analitico: {
                        type: String
                        },
                    certificadoDomicilio: {
                        type: String
                        },
                }
            ],
            datosProfesores:[
                {
                    datos: {
                        type: String
                        },
                }
            ],
            datosAdmin:[
                {
                    datos: {
                        type: String
                        },
                }
            ]
        }
    ],
    activo: {
        type: Boolean,
        default: true
    }
}
```
####  **MATERIAS**
```js
{
    descripcionMateria: {type: String,require: true,},
    profTitular: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    profAux: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    carrera: {type: Schema.Types.ObjectId,ref: "Carreras",},
    anio: {type: String,required: true},
    horarioIncio: {type: String,require: true,},
    horarioFinal: {type: String,require: true,},
    notas:[
        {
            Alumno: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
            parcial1:{type: String,require: true,},
            parcial2:{type: String,require: true,},
            parcial3:{type: String,require: true,},
            recuperatorio:{type: String,require: true,},
            final:{type: String,require: true,},
            estado:{type: String,require: true,},
        }
    ],
    inasistencia: [
    {
      dia: {type: Date,},
      idUser:{type: Schema.Types.ObjectId,ref: "User",},
    },
  ],
    activo: {type: Boolean,default: true}
}
```

####  **CARRERAS**
```js
{
    nombreCarrera: {type: String,required: true,},
    activo: {type: Boolean,default: true,},
},
```
####  **PUBLICACIONES**
```js
{
    autorNombre: {type: Schema.Types.ObjectId,ref: "User",},
    tipo: {type: String,required: true,},
    contenido: {type: String,required: true,},
    fecha: {type: Date,required: true,},
    imagenURL:{type: String,},
    comentarios: [
        {
        autor: {type: Schema.Types.ObjectId,ref: "User",},
        descripcion: {type: String,required: true,},
        },
    ]
}
