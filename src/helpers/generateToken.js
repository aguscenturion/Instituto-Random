const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id,
            role: user.perfiles.tipo
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        }
    )
}


const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return null
    }
}

/* const decodeSign = async (user) => {} */



module.exports = { tokenSign, verifyToken}

