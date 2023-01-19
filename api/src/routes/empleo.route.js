const express = require('express');
const router = express.Router();
const empleo = require('../controllers/empleo.controller.js');

/* GET all jobs */
router.get('/', empleo.get);
  
/* POST job */
router.post('/create', empleo.post);

module.exports = router;
