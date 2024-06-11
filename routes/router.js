const express = require('express');
const router = express.Router();
const apiRouter = require('./apiRouter');
const ejsRouter = require('./ejsRouter');

// Middleware pour servir les fichiers statiques (CSS, images, etc.)
router.use(express.static('public'));
router.use(express.urlencoded({ extended: true }));

// Utilisation des routeurs spécifiques
router.use('/api', apiRouter); // Routes pour l'API
router.use('/', ejsRouter); // Routes pour les vues EJS

module.exports = router;