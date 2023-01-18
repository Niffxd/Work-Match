const express = require('express');
const router = express.Router();
const ejemplo = require('../controllers/ejemplo.controller');

/* GET ejemplos */
router.get('/', ejemplo.get);
  
/* POST ejemplo */
router.post('/', ejemplo.create);

/* PUT ejemplo */
router.put('/:id', ejemplo.update);

/* DELETE ejemplo */
router.delete('/:id', ejemplo.remove);

module.exports = router;
