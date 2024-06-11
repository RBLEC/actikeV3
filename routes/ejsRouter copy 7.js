const fs = require('fs');
const path = require('path');
const express = require('express');
const ejsRouter = express.Router();
const logger = require('../app/libs/logger');
const initializeData = require('../app/middlewares/initializeData');
const sendEmailMiddleware = require('../app/middlewares/nodemailer');
const seoConfig = require('../app/data/seoConfig'); // Assurez-vous que ce fichier existe et est correctement configuré

// Route page acceuil
ejsRouter.get('/', (req, res) => {
    initializeData();
    const globalDataPath = path.join(__dirname, '../app/data/globalData.json');
    let globalData;
    if (fs.existsSync(globalDataPath)) {
        globalData = require(globalDataPath);
    } else {
        globalData = {};
    }
    try {
        res.status(200).render('layouts/main', {
            content: 'index',
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
  try {
    logger.info('mentions légales page');
    res.status(200).render('layouts/main', {
      ...seoConfig.legalMentions,
      content: 'legal-mention'
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
      content: 'send-email'
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
    res.status(200).render('pages/envoyer-message', { pageTitle: 'email devis' });
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

// Route pour la page 404 (Page non trouvée)
ejsRouter.use((req, res) => {
  try {
    logger.info('404 page');
    res.status(404).render('layouts/main', {
      ...seoConfig['404'],
      content: '404'
    });
  } catch (error) {
    logger.error(error);
    res.status(500).render('layouts/main', {
      pageDescription: 'Une erreur interne est survenue lors du rendu de la page 404.',
      keywords: 'erreur, interne, 500',
      error: error,
      content: '500'
    });
  }
});

module.exports = ejsRouter;
