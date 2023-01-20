const express = require('express');

const router = express.Router();
const ejemplo = require('../controllers/ejemplo.controller.js');

/* GET ejemplos */
router.get('/', ejemplo.read);

/* POST ejemplo */
router.post('/', ejemplo.create);

/* PUT ejemplo */
router.put('/:id', ejemplo.update);

/* DELETE ejemplo */
router.delete('/:id', ejemplo.remove);

module.exports = router;
