const express = require('express');

const router = express.Router();
const city = require('../controllers/city.controller.js');

/* GET all jobs */
router.get('/', city.read);
/* GET job  detail */
router.get('/:id', city.read);

/* POST job */
router.post('/', city.create);

/* UPDATE job */
router.put('/', city.update);

/* DELETE job */
router.delete('/:id', city.remove);

module.exports = router;
