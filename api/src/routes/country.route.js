const express = require('express');

const router = express.Router();
const country = require('../controllers/country.controller.js');

/* GET all jobs */
router.get('/', country.read);
/* GET job  detail */
router.get('/:id', country.read);

/* POST job */
router.post('/', country.create);

/* UPDATE job */
router.put('/', country.update);

/* DELETE job */
router.delete('/:id', country.remove);

module.exports = router;
