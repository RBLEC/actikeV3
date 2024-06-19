const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const logger = require('../libs/logger');
const seoConfig = require('../data/seoConfig.json');
const globalData = require('../data/globalData.json')
const dotenv = require(`dotenv`);
const initializeData = require('./initializeData');
dotenv.config();

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS1
  },
});

// Fonction pour personnaliser les données utilisateur
function modifyUserData(userData) {
  return {
    ...userData,
    name: userData.name.toUpperCase(),
    firstname: userData.firstname.charAt(0).toUpperCase() + userData.firstname.slice(1),
    email: userData.email.trim().toLowerCase(),
  };
}

// Fonction pour envoyer l'e-mail à l'équipe et au client
async function sendEmails(userData, mailOptionsTeam, mailOptionsClient) {
  try {
    // Envoi de l'email à l'équipe
    await transporter.sendMail(mailOptionsTeam);
    console.log('E-mail envoyé à l\'équipe.');
    // Envoi de l'email de confirmation au client
    await transporter.sendMail(mailOptionsClient);
    console.log('E-mail de confirmation envoyé au client.');
  } catch (error) {
    console.error('Erreur lors de l\'envoi des e-mails :', error);
    throw new Error('Une erreur est survenue lors de l\'envoi des e-mails.');
  }
}

// Middleware pour envoyer un e-mail
const sendEmailMiddleware = async (req, res, next) => {
  const userData = modifyUserData(req.body);

  // Message pour l'équipe
  const messageTeam = `
Bonjour l'équipe BLEC Web,

Vous avez reçu une nouvelle demande de contact :

Nom : ${userData.name}
Prénom : ${userData.firstname}
Téléphone : ${userData.phone}
E-mail : ${userData.email}
Sujet : ${userData.subject}

Message :
${userData.message}

Veuillez répondre dès que possible.

Cordialement,
L'équipe de développement BLEC Web Tech.
  `;

  // Message pour le client
  const messageClient = `
Bonjour ${userData.firstname},

Nous avons bien reçu votre demande de contact avec le sujet "${userData.subject}". Nous vous répondrons dans les plus brefs délais.

Merci d'avoir contacté BLEC Web.

Cordialement,
L'équipe BLEC Web.
  `;

  // Options de mail pour l'équipe
  const mailOptionsTeam = {
    from: process.env.USER,
    to: process.env.COMPANY_EMAIL,
    subject: `Nouvelle demande de contact : ${userData.subject}`,
    text: messageTeam,
  };

  
  // Options de mail pour le client
  const mailOptionsClient = {
    from: process.env.USER,
    to: userData.email,
    subject: `Confirmation de réception de votre demande : ${userData.subject}`,
    text: messageClient,
  };

    // Initialiser les données si nécessaire
    initializeData();
    // Charger globalData.json après l'initialisation
    const globalDataPath = path.join(__dirname, '../data/globalData.json');
    let globalData;
    if (fs.existsSync(globalDataPath)) {
        globalData = require(globalDataPath);
    } else {
        globalData = {}; // Valeur par défaut si le fichier n'existe pas
    }


  try {
    await sendEmails(userData, mailOptionsTeam, mailOptionsClient);
    logger.info("Affichage de la page d'envoi des emails");
    res.status(200).render('layouts/main', {
      ...seoConfig['send-email'],
      content: 'send-email',
      data: globalData,
      message: 'Votre message a été envoyé avec succès.'
    });
    next();
  } catch (error) {
    res.status(500).send('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
  }
};

module.exports = sendEmailMiddleware;
