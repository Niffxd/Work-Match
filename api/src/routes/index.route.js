const { Router } = require('express');
// Importar todos los routers;
const empleoRouter = require('./empleo.route.js');
const userRouter = require('./user.route.js');

const router = Router();

// Configurar los routers
router.use('/user', userRouter);
router.use('/empleos', empleoRouter);

module.exports = router;
