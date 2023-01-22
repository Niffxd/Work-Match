const express = require('express');

const router = express.Router();
const project = require('../controllers/project.controller.js');

/* GET all jobs */
router.get('/', project.read);
/* GET job  detail */
router.get('/:id', project.read);

/* POST job */
router.post('/', project.create);

/* UPDATE job */
router.put('/', project.update);

/* DELETE job */
router.delete('/:id', project.remove);

module.exports = router;
