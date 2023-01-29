const { Router } = require('express');
// Importar todos los routers;
const projectRouter = require('./project.route.js');
const userRouter = require('./user.route.js');
const categoryRouter = require('./category.route.js');
const addressRouter = require('./address.route.js');
const cityRouter = require('./city.route.js');
const countryRouter = require('./country.route.js');
const loginRouter = require('./login.route.js');
const roleRouter = require('./role.route.js');
const stateRouter = require('./state.route.js');
const jobState = require('./jobState.route');

const router = Router();

// Configurar los routers
router.use('/user', userRouter);
router.use('/project', projectRouter);
router.use('/category', categoryRouter);
router.use('/address', addressRouter);
router.use('/city', cityRouter);
router.use('/country', countryRouter);
router.use('/login', loginRouter);
router.use('/role', roleRouter);
router.use('/state', stateRouter);
router.use('/jobState', jobState);

module.exports = router;
