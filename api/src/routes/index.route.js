const { Router } = require('express');
// Importar todos los routers;
const ejemploRouter = require('./ejemplo.route.js');
const empleoRouter = require('./empleo.route.js');

const router = Router();

// Configurar los routers
router.use('/ejemplo', ejemploRouter);
router.use('/empleos',empleoRouter);

module.exports = router;
