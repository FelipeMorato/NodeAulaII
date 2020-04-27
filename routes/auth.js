const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

// * controller
const Auth = require('../controller/Auth');
const authController = new Auth();

// * instancia do router
const router = express.Router();

router.post('/', verifyToken, authController.validate);

module.exports = router;