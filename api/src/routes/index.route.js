const { Router } = require('express');
// Importar todos los routers;
const ejemploRouter = require('./ejemplo.route.js');

const router = Router();

// Configurar los routers
router.use('/ejemplo', ejemploRouter);


module.exports = router;
