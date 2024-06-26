const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, '../data/services.json');
const seoConfigPath = path.join(__dirname, '../data/seoConfig.json');
const enterprisePath = path.join(__dirname, '../data/enterprise.json');
const ecoindexPath = path.join(__dirname, '../data/ecoindex.json');
const siteContentPath = path.join(__dirname, '../data/siteContent.json');
const globalDataPath = path.join(__dirname, '../data/globalData.json');
const faqPath = path.join(__dirname, '../data/faq.json');

const mergeData = () => {
    try {
        const ecoindexData = JSON.parse(fs.readFileSync(ecoindexPath, 'utf8'));
        const enterpriseData = JSON.parse(fs.readFileSync(enterprisePath, 'utf8'));
        const servicesData = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
        const seoConfigData = JSON.parse(fs.readFileSync(seoConfigPath, 'utf8'));
        const siteContentData = JSON.parse(fs.readFileSync(siteContentPath, 'utf8'));
        const faqData = JSON.parse(fs.readFileSync(faqPath, 'utf8'));

        const globalData = {
            ecoindex: ecoindexData,
            enterprise: enterpriseData,
            services: servicesData.services,
            seoConfig: seoConfigData,
            siteContent: siteContentData,
            faq: faqData
        };

        fs.writeFileSync(globalDataPath, JSON.stringify(globalData, null, 4));
        console.log("Les données ont été fusionnées avec succès dans globalData.json");
    } catch (error) {
        console.error("Erreur lors de la fusion des données:", error);
    }
};

module.exports = { mergeData };
