const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
router.get('/', newsController.get);
router.post('/', newsController.create);
router.put('/:id', newsController.update);
router.delete('/:id', newsController.remove);

module.exports = router;