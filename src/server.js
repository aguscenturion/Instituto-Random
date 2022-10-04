const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const usuariosRoutes = require ('./routes/usuarios.routes.js')
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
app.use('/api', usuariosRoutes)


//routes
app.get('/api', (req, res) => {
   res.send ('Servidor iniciado')
})

//conexion a la base de datos 
/* mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log('Conectado a la base de datos'))
   .catch((error) => console.error(error)); */

app.listen(PORT , () => {
   console.log(`Servidor iniciado en el puerto: ${PORT}`)
})