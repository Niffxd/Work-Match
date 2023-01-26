const express = require('express');

const router = express.Router();
const role = require('../controllers/role.controller.js');

/* GET all jobs */
router.get('/', role.read);
/* GET job  detail */
router.get('/:id', role.read);

/* POST job */
router.post('/', role.create);

/* UPDATE job */
router.put('/', role.update);

/* DELETE job */
router.delete('/:id', role.remove);

module.exports = router;
