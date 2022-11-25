const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    dni: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    }
})
/* userSchema.set('toJSON', {
    transform: (document, returnedObject ) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v  
    }
}) */
 
        
module.exports = mongoose.model('users', userSchema)

