const express = require('express');
const router = express.Router();
const empleos = require('../controllers/empleosController.js');

/* GET all jobs */
router.get('/', empleos.getallJobs);
  
/* POST ejemplo */
router.post('/create', empleos.postJob);

module.exports = router;