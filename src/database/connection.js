const { connect } = require('mongoose');


const conectarDB = async () => {
    try {
        connect(process.env.MONGODB_URI);
        console.log('Conectado a la base de datos');
    } catch (err) {
        console.log(err);
    }
}


module.exports = conectarDB;