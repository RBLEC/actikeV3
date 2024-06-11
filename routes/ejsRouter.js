const fs = require('fs');
const path = require('path');
const express = require('express');
const ejsRouter = express.Router();
const logger = require('../app/libs/logger');
const initializeData = require('../app/middlewares/initializeData');
const sendEmailMiddleware = require('../app/middlewares/nodemailer');
const seoConfig = require('../app/data/seoConfig.json');


// Route page acceuil
ejsRouter.get('/', (req, res) => {
    // Initialiser les données si nécessaire
    initializeData();

    // Charger globalData.json après l'initialisation
    const globalDataPath = path.join(__dirname, '../app/data/globalData.json');
    let globalData;
    if (fs.existsSync(globalDataPath)) {
        globalData = require(globalDataPath);
    } else {
        globalData = {}; // Valeur par défaut si le fichier n'existe pas
    }
    try {
        res.status(200).render('layouts/main', {
            content: 'index',
            ...seoConfig.home,
            data: globalData // Passer globalData à la vue
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



/*
// Route pour la page mentions légales
ejsRouter.get('/mentions-legales', (req, res) => {
  try {
    logger.info('mentions légales page');
    res.status(200).render('layouts/main', {
      ...seoConfig.legalMentions,
      content: 'legal-mention'
    });
  } catch (error) {
    logger.error(error);
    res.status(500).render('layouts/main', {
      pageTitle: seoConfig['500'].pageTitle,
      pageDescription: seoConfig['500'].pageDescription,
      keywords: seoConfig['500'].keywords,
      error: error,
      content: '500'
    });
  }
});

// Route pour la page d'envoi de message
ejsRouter.get('/envoyer-email', (req, res) => {
  try {
    logger.info('envoi d\'email page');
    res.status(200).render('layouts/main', {
      ...seoConfig.sendEmail,
      content: 'send-email'
    });
  } catch (error) {
    logger.error(error);
    res.status(500).render('layouts/main', {
      pageTitle: seoConfig['500'].pageTitle,
      pageDescription: seoConfig['500'].pageDescription,
      keywords: seoConfig['500'].keywords,
      error: error,
      content: '500'
    });
  }
});
*/




module.exports = ejsRouter;