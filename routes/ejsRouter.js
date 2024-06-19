const fs = require('fs');
const path = require('path');
const express = require('express');
const ejsRouter = express.Router();
const logger = require('../app/libs/logger');
const initializeData = require('../app/middlewares/initializeData');
const sendEmailMiddleware = require('../app/middlewares/nodemailer');
const seoConfig = require('../app/data/seoConfig.json');
const globalData = require('../app/data/globalData.json')

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

    // console.log(globalData); // Ajoutez cette ligne pour vérifier le contenu de globalData

    try {
        res.status(200).render('layouts/main', {
            content: 'index',
            ...seoConfig.home,
            data: globalData
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



// Route pour la page mentions légales
ejsRouter.get('/mentions-legales', (req, res) => {
  /*
    const globalDataPath = path.join(__dirname, '../app/data/globalData.json');
    let globalData;
    if (fs.existsSync(globalDataPath)) {
        globalData = require(globalDataPath);
    } else {
        globalData = {};
    }*/

    try {
        logger.info('mentions légales page');
        res.status(200).render('layouts/main', {
            ...seoConfig.legalMentions,
            content: 'legal-mention',
            data: globalData,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).render('layouts/main', {
            pageDescription: 'Une erreur interne est survenue lors du rendu de la page Mentions Légales.',
            keywords: 'erreur, interne, 500',
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
      content: 'send-email',
      data: globalData
    });
  } catch (error) {
    logger.error(error);
    res.status(500).render('layouts/main', {
      pageDescription: 'Une erreur interne est survenue lors du rendu de la page Envoyer un Email.',
      keywords: 'erreur, interne, 500',
      error: error,
      content: '500'
    });
  }
});

// Route pour poster un mail
ejsRouter.post('/envoyer-message', sendEmailMiddleware, (req, res) => {
  try {
    res.status(200).render('pages/envoyer-email', { pageTitle: 'email devis' });
  } catch (error) {
    logger.error(error);
    res.status(500).render('layouts/main', {
      pageDescription: 'Une erreur interne est survenue lors de l\'envoi du message.',
      keywords: 'erreur, interne, 500',
      error: error,
      content: '500'
    });
  }
});











module.exports = ejsRouter;
