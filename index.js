const express = require('express');
const dotenv = require('dotenv');
const morganMiddleware = require('./app/middlewares/morgan.middleware');
const { fetchEcoindexData } = require('./app/middlewares/fetchEcoindexData');
const router = require('./routes/router');
const path = require('path');
const cron = require('node-cron');
const { mergeData } = require('./app/middlewares/mergeData');
const initializeData = require('./app/middlewares/initializeData');

const port = process.env.PORT || 3020; // Port sur lequel le serveur écoutera
const logger = require('./app/libs/logger');

// Initialiser globalData.json et ecoindex.json si nécessaire
initializeData();

const app = express();

// Configuration du moteur de vue EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views')); // Utilisation de path pour définir le dossier des fichiers de gabarits EJS

// Middleware pour servir les fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, '/src/public')));

// Ajout du middleware morgan
app.use(morganMiddleware);



// Planifier la tâche cron pour s'exécuter tous les premiers du mois à minuit
cron.schedule('0 0 1 * *', () => {
    console.log('Mise à jour des données : fetchEcoindexData et mergeData');
    fetchEcoindexData();
    mergeData();
});

// Exécuter fetchEcoindexData et mergeData au démarrage du serveur
fetchEcoindexData();
mergeData();

// Utilisation des routes définies dans le fichier router.js
app.use(router);

// Démarrage du serveur
app.listen(port, () => {
    logger.info(`The server is running on port ${port}`);
});
