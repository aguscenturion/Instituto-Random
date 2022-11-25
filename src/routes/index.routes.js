const alumnosRutas = require ('../routes/alumnos.routes');
const profesoresRutas = require ('../routes/profesores.routes.js');
const administradoresRutas = require ('../routes/administradores.routes.js');
const usuariosRutas = require ('../routes/usuarios.routes.js');
const authRoutes = require ('../routes/login.routes.js');
const publicacionesRoutes = require ('../routes/publicaciones.routes');
const carrerasRoutes = require ('../routes/carreras.routes');
const materiasRoutes = require ('../routes/materias.routes');

const rutas = () => [
    usuariosRutas,
    alumnosRutas,
    profesoresRutas,
    administradoresRutas,
    authRoutes,
    publicacionesRoutes,
    carrerasRoutes,
    materiasRoutes
];

module.exports = rutas
