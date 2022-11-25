const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const rutas = require ('../src/routes/index.routes.js')

const conectarDB = require('./database/connection.js');

//inicializacion
require('dotenv').config();
conectarDB();
const app = express()

//config
const PORT = process.env.PORT || 9000


//middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use(express.json())

//rutas
app.use("/api", rutas())

//servidor
app.listen(PORT , () => {
   console.log(`Servidor iniciado en el puerto: ${PORT}`)
})

//conexion a la base de datos 
/* mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log('Conectado a la base de datos'))
   .catch((error) => console.error(error)); */

