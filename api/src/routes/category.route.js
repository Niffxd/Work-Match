const express = require('express');

const router = express.Router();
const category = require('../controllers/category.controller.js');

/* GET all jobs */
router.get('/', category.read);
/* GET job  detail */
router.get('/:id', category.read);

/* POST job */
router.post('/', category.create);

/* UPDATE job */
router.put('/', category.update);

/* DELETE job */
router.delete('/:id', category.remove);

module.exports = router;
