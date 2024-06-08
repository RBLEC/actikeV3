const fs = require('fs');
const path = require('path');
const express = require('express');
const ejsRouter = express.Router();
const logger = require('../app/libs/logger');
const initializeData = require('../app/middlewares/initializeData');
const sendEmailMiddleware = require('../app/middlewares/nodemailer');

// Route pour initialiser les fichiers et rendre la vue
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

    console.log('globalData', globalData);
    console.log('seoConfig.home', globalData.seoConfig.home);

    // Rendre la vue
    try {
        res.status(200).render('layouts/main', {
            //...seoConfig.home,
            content: 'index',
            data: globalData // Passer globalData à la vue
          //  console.log('data', globalData)
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
