
//! V1 Fontionnel
const fs = require('fs');
const path = require('path');
const logger = require("../../libs/logger");

const logFilePath = path.join(__dirname, '../../logs/all.log');
const logFileContent = fs.readFileSync(logFilePath, 'utf-8');
logger.info("Lecture du fichier logs");

module.exports = logFileContent;

