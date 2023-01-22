const { Router } = require('express');
// Importar todos los routers;
const projectRouter = require('./project.route.js');
const userRouter = require('./user.route.js');

const router = Router();

// Configurar los routers
router.use('/user', userRouter);
router.use('/project', projectRouter);

module.exports = router;
