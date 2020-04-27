const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

// * controller
const Auth = require('../controller/Auth');
const authController = new Auth();

// * instancia do router
const router = express.Router();

router.post('/', authController.validate);

module.exports = router;