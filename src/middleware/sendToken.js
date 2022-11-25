const sendToken = (res, usuario, statusCode, message) => {
   
    const userData = {
      _id: usuario.id,
      nombre: usuario.name,
      apellido: usuario.apellido,
      verified: usuario.verified,
    };
  
    res
      .status(statusCode)
      .json({ success: true, message, usuario: userData });
  };

  module.exports = sendToken;