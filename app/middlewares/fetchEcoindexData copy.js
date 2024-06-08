const axios = require('axios');
const fs = require('fs');
const path = require('path');
const logger = require('../libs/logger');

// Charger le fichier enterprise.json
const enterpriseData = require('../data/enterprise.json');
const ecoindexId = enterpriseData[0].ecoindexId;
const apiUrl = `https://api.ecoindex.fr/v1/ecoindexes/${ecoindexId}`;

const fetchEcoindexData = async () => {
  try {
    const response = await axios.get(apiUrl);
    const ecoindexData = response.data;

    // Enregistrer les données dans public/data/ecoindex.json
    fs.writeFileSync(path.join(__dirname, '../data/ecoindex.json'), JSON.stringify(ecoindexData, null, 2));
    logger.info('Ecoindex data has been updated.');
  } catch (error) {
    logger.error('Error fetching Ecoindex data:', error);
  }
};

module.exports = fetchEcoindexData;
