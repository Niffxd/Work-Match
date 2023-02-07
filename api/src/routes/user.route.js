const express = require('express');

const router = express.Router();
const user = require('../controllers/user.controller.js');

/* GET users */
router.get('/', user.read);
router.get('/:id', user.read);
router.get('/:id/address', user.readUserAddres);
router.get('/username/:username', user.readUsername);

/* POST user */
router.post('/', user.create);

/* PUT user */
router.put('/', user.update);
router.put('/:id', user.update);

router.put('/rate', user.updateRate);
router.put('/:id', user.reactivateAccount);

/* DELETE user */
router.delete('/:id', user.remove);

module.exports = router;
