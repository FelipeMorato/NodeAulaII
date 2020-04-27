const express = require('express');
const users = require('./users');
const auth = require('./auth');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.use('/users', verifyToken, users);
router.use('/auth', auth);

module.exports = router;