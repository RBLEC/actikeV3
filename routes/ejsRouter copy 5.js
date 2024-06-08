const fs = require('fs');
const express = require('express');
const path = require('path');
const ejsRouter= express.Router();
const logger = require('../app/libs/logger');
//const services = require('../app/data/services.json');
const seoConfig = require('../app/data/seoConfig.json');
//const enterprise = require('../app/data/enterprise.json');
//const ecoindexDatas = require('../app/data/ecoindex.json');
//const globalData = require('../app/data/ecoindex.json');

const sendEmailMiddleware = require('../app/middlewares/nodemailer');

// Charger globalData.json après l'initialisation
const globalDataPath = path.join(__dirname, '../data/globalData.json');
let globalData;
if (fs.existsSync(globalDataPath)) {
    globalData = require(globalDataPath);
} else {
    globalData = {}; // Valeur par défaut si le fichier n'existe pas
}

console.log('globalDataPath', globalData)

/*
router.get('/', (req, res) => {
    res.render('index', { data: globalData });
});
*/

// Route pour la page d'accueil
ejsRouter.get('/', async (req, res) => {
  try { 
    res.status(200).render('layouts/main', {
      ...seoConfig.home,
      content: 'index',
    });
  } catch (error) {
    logger.error(error);
    res.status(500).render('layouts/main', {
      pageMeta: {
        title: 'Erreur',
        description: 'Une erreur interne est survenue lors du rendu de la page d\'accueil.',
        keywords: 'erreur, interne, 500',
        error: error.message
      },
      content: '500'
    });
  }
});

module.exports = ejsRouter;
