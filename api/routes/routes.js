const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/index');
router.get('/', indexController.get);
router.use('/login', require('./loginRouter'));
router.use('/user', require('./userRouter'));
router.use('/news', require('./newsRouter'));

module.exports = router;