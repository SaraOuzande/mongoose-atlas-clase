// routes/index.js
const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');  // Importar las rutas de usuarios

// Usar las rutas de usuarios
router.use('/users', usersRoutes);

module.exports = router;
