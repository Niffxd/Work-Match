const express = require('express');

const router = express.Router();
const address = require('../controllers/address.controller.js');

/* GET all jobs */
router.get('/', address.read);
/* GET job  detail */
router.get('/:id', address.read);

/* POST job */
router.post('/', address.create);

/* UPDATE job */
router.put('/', address.update);

/* DELETE job */
router.delete('/:id', address.remove);

module.exports = router;
