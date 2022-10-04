const { getUsers } = require('../controllers/alumnos.controllers');
const router = require ('express').Router();

router.get ('/users', getUsers);

module.exports = router;
