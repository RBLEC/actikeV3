const express = require('express');
const ejsRouter = express.Router();
const logger = require('../app/libs/logger');
const services = require('../app/data/services.json');
const seoConfig = require('../app/data/seoConfig.json');
const enterprise = require('../app/data/enterprise.json');
const ecoindexData = require('../app/data/ecoindex.json');
const sendEmailMiddleware = require('../app/middlewares/nodemailer');

// Route pour la page d'accueil
ejsRouter.get('/', async (req, res) => {
  try { 
    res.status(200).render('layouts/main', {
      ...seoConfig.home,
      services: services.services,
      enterprise: enterprise[0],
      ecoindexData: ecoindexData,
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

// Route pour la page 500
ejsRouter.get('/500', (req, res) => {
  try {
    logger.info('500 page');
    res.status(500).render('layouts/main', {
      pageDescription: 'Une erreur interne est survenue.',
      keywords: 'erreur, interne, 500',
      ...seoConfig['500'],
      content: '500'
    });
  } catch (error) {
    logger.error(error);
    res.status(500).render('layouts/main', {
      pageDescription: 'Une erreur interne est survenue lors du rendu de la page 500.',
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
