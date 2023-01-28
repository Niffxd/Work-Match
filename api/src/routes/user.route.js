const express = require('express');

const router = express.Router();
const user = require('../controllers/user.controller.js');

/* GET users */
router.get('/', user.read);
router.get('/:id', user.read);
router.get('/:id/address', user.readUserAddres);

/* POST user */
router.post('/', user.create);

/* PUT user */
router.put('/', user.update);

/* DELETE user */
router.delete('/:id', user.remove);

module.exports = router;
