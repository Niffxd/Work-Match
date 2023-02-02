const express = require('express');

const router = express.Router();
const login = require('../controllers/login.controller.js');

/* GET all jobs */
router.get('/', login.read);
/* GET job  detail */
router.get('/:id', login.read);

/* POST job */
router.post('/', login.create);
router.post('/email', login.createEmailRequest);

/* UPDATE job */
router.put('/', login.update);

/* DELETE job */
router.delete('/:id', login.remove);

module.exports = router;
