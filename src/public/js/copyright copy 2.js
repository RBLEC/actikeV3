


/*

document.addEventListener("DOMContentLoaded", function() {
  //const yearOfCreation = 2024; // Mettez ici l'année de création de votre entreprise
  const yearOfCreation = 2022; // Mettez ici l'année de création de votre entreprise
  const currentYear = new Date().getFullYear();
  const copyrightText = document.getElementById("copyright");
  //const enterprise = require('../app/data/enterprise.json');

  if (yearOfCreation === currentYear) {
    // Si l'année de création est la même que l'année en cours, affiche seulement l'année en cours
    copyrightText.innerHTML = `&copy; ${currentYear} BLEC Web SAS. Tous droits réservés.`;
  } else {
    // Sinon, affiche la plage d'années de l'année de création à l'année en cours
    copyrightText.innerHTML = `&copy; ${yearOfCreation}-${currentYear} BLEC Web SAS. Tous droits réservés.`;
  }
});
*/




document.addEventListener("DOMContentLoaded", function() {
  //const enterprise = require('../../app/data/enterprise.json');
 // const debutActivite = new Date(enterprise[0].debut_activite).getFullYear();
  //const currentYear = new Date().getFullYear();
  const currentYear = 2021
  const copyrightText = document.getElementById("copyright");

console.log('debutActivite', debutActivite)

  if (debutActivite === currentYear) {
    // Si l'année de création est la même que l'année en cours, affiche seulement l'année en cours
    copyrightText.innerHTML = `&copy; ${currentYear} BLEC Web SAS. Tous droits réservés.`;
  } else {
    // Sinon, affiche la plage d'années de l'année de création à l'année en cours
    copyrightText.innerHTML = `&copy; ${debutActivite}-${currentYear} BLEC Web SAS. Tous droits réservés.`;
  }
});
