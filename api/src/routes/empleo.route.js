const express = require('express');
const router = express.Router();
const empleo = require('../controllers/empleo.controller.js');

/* GET all jobs */
router.get('/', empleo.read);
/* GET job  detail */
router.get('/:id', empleo.getId);
/* POST job */
router.post('/create', empleo.create);
/* update job */
router.put('/update/:id', empleo.update);
/* delete job */
router.delete('/:id', empleo.remove);

module.exports = router;
