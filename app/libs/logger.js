const winston = require('winston');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const packageJson = fs.readFileSync('package.json', 'utf8');
const packageData = JSON.parse(packageJson);

const levels = {
  emergency:0, // une erreur critique qui a besoin d'une attention immédiate pour maintenir l'intégrité de l'application.
  alert: 1, // une erreur critique qui nécessite une action immédiate pour maintenir le bon fonctionnement de l'application.
  critical: 2, // une erreur critique qui affecte le fonctionnement normal de l'application.
  error: 3, // une erreur qui a affecté le fonctionnement normal de l'application.
  warning: 4, // un avertissement indiquant un comportement anormal ou une erreur potentielle.
  info: 5, // des informations sur les opérations normales de l'application.
  http: 6, // le chemin des utilisateurs
  debug: 7, // pour debuger
}


//! logs en format json
const format = winston.format.combine(
  winston.format.label (),
  winston.format.timestamp(),
  winston.format.printf(
    info => `${JSON.stringify({
    id : uuidv4(),
    projetName: packageData.projetName,
    projetPart: packageData.projetPart,
    timestamp: info.timestamp, 
    levelMode: process.env.NODE_ENV,
    level: info.level.toUpperCase(), 
    message: info.message
    })}`
  ),
);

/** 
//! 


const format = winston.format.combine(
  winston.format.label(),
  winston.format.timestamp(),
  winston.format.printf(
    info => `"id" :"${uuidv4()}", "projetName" :"${packageData.projetName}"`
  ),
);

*/

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: './logs/all.log' }),
];

const logger = winston.createLogger({
  levelMode: process.env.NODE_ENV,
  levels,
  format,
  transports
})

module.exports = logger