const express = require('express');

const router = express.Router();
const state = require('../controllers/state.controller.js');

/* GET all jobs */
router.get('/', state.read);
/* GET job  detail */
router.get('/:id', state.read);

/* POST job */
router.post('/', state.create);

/* UPDATE job */
router.put('/', state.update);

/* DELETE job */
router.delete('/:id', state.remove);

module.exports = router;
