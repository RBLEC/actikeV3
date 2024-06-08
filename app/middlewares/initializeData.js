const fs = require('fs');
const path = require('path');
const logger = require('../libs/logger');

const ecoindexPath = path.join(__dirname, '../data/ecoindex.json');
const globalDataPath = path.join(__dirname, '../data/globalData.json');

const initializeEcoindexData = () => {
    if (!fs.existsSync(ecoindexPath)) {
        const initialData = {
            width: 0,
            url: '',
            size: 0,
            requests: 0,
            ges: 0,
            ecoindex_version: '',
            page_type: null,
            version: 0,
            initial_total_results: 0,
            nodes: 0,
            height: 0,
            grade: '',
            score: 0,
            water: 0,
            date: '',
            id: '',
            host: '',
            initial_ranking: 0
        };
        fs.writeFileSync(ecoindexPath, JSON.stringify(initialData, null, 2));
        logger.info("Fichier ecoindex.json initialisé");
    }
};

const initializeGlobalData = () => {
    if (!fs.existsSync(globalDataPath)) {
        const initialData = {
            ecoindex: {},
            enterprise: {},
            services: [],
            seoConfig: {}
        };
        fs.writeFileSync(globalDataPath, JSON.stringify(initialData, null, 4));
        logger.info("Fichier globalData.json initialisé");
    }
};

const initializeData = () => {
    initializeEcoindexData();
    initializeGlobalData();
};

module.exports = initializeData;
