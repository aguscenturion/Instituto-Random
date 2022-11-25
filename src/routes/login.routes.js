const express = require('express');
const router = express.Router();

const { 
    registerCtrl,
    loginCtrl,
    loginUser,
    getMyProfile,
    loginNative
} = require ('../controllers/login.controllers');

const checkAuth = require('../middleware/auth.middleware');

router.post ('/login', loginCtrl)

router.post('/login-native', loginNative)

router.post ('/register', registerCtrl)

router.get ('/login-user',checkAuth, loginUser)

router.get('/me', checkAuth, getMyProfile)



module.exports = router;