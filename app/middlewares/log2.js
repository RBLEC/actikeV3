const fs = require('fs');
const path = require('path');

// Chemin vers le fichier de logs
const logFilePath = path.join(__dirname, '../../logs/all.log');

// Lecture des logs depuis le fichier
const logFileContent = fs.readFileSync(logFilePath, 'utf-8');

// Transformation du contenu du fichier en un tableau JavaScript
const logsArray = logFileContent.split('\n').map((line) => {
  try {
    return JSON.parse(line);
  } catch (error) {
    console.error('Erreur lors de la conversion de la ligne en JSON :', error);
    return null; // Vous pouvez ignorer les lignes qui ne sont pas valides JSON
  }
}).filter((log) => log !== null); // Filtrez les logs qui sont devenus null en raison d'erreurs de parsing

// Maintenant, logsArray est un tableau JavaScript contenant tous les logs du fichier
// Vous pouvez trier et manipuler ce tableau comme vous le souhaitez

module.exports = logsArray