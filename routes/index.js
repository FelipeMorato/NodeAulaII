const express = require('express');
const users = require('./users');
const auth = require('./auth');
const verifyToken = require('../middlewares/verifyToken');

// * Instancia do router
const router = express.Router();

// * Rotas Base
router.use('/users',verifyToken, users);
router.use('/auth', auth);

module.exports = router;