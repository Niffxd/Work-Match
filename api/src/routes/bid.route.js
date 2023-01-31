const express = require('express');
const router = express.Router();
const bid = require('../controllers/bid.controller.js');

//create
router.post('/', bid.create);

//update
router.put('/', bid.update);

module.exports = router;
