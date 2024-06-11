
/*

document.addEventListener("DOMContentLoaded", function() {
 // const createEnterprise = require('../../../app/data/enterprise.json');
  const debutActiviteDate = <%= data.enterprise[0].denomination %>  ;
  const debutActiviteYear = debutActiviteDate.getFullYear();
//  const debutActiviteYear = 2021;
  const currentYear = new Date().getFullYear();
  const copyrightText = document.getElementById("copyright");

console.log('nterprise', debutActiviteDate)

  if (debutActiviteYear === currentYear) {
    // Si l'année de création est la même que l'année en cours, affiche seulement l'année en cours
    copyrightText.innerHTML = `&copy; ${currentYear} BLEC Web SAS. Tous droits réservés.`;
  } else {
    // Sinon, affiche la plage d'années de l'année de création à l'année en cours
    copyrightText.innerHTML = `&copy; ${debutActiviteYear}-${currentYear} BLEC Web SAS. Tous droits réservés.`;
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const enterprise = window.enterpriseData;
    const debutActiviteDate = new Date(enterprise[0].debut_activite);
    const debutActiviteYear = debutActiviteDate.getFullYear();
  //  const debutActiviteYear = 2021;
    const currentYear = new Date().getFullYear();
    const copyrightText = document.getElementById("copyright");

    if (debutActiviteYear === currentYear) {
        // Si l'année de création est la même que l'année en cours, affiche seulement l'année en cours
        copyrightText.innerHTML = `&copy; ${currentYear} BLEC Web SAS. Tous droits réservés.`;
    } else {
        // Sinon, affiche la plage d'années de l'année de création à l'année en cours
        copyrightText.innerHTML = `&copy; ${debutActiviteYear}-${currentYear} BLEC Web SAS. Tous droits réservés.`;
    }
});



document.addEventListener("DOMContentLoaded", function() {
 // const yearOfCreation = 2021; // Mettez ici l'année de création de votre entreprise


    const enterprise = window.enterpriseData;
    const debutActiviteDate = new Date(enterprise[0].debut_activite);


  const yearOfCreation = debutActiviteDate
  const currentYear = new Date().getFullYear();
  const copyrightText = document.getElementById("copyright");

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
    const enterprise = window.enterpriseData;
    console.log('enterprise', enterprise)
    const debutActiviteDate = new Date(enterprise.debut_activite);
    const yearOfCreation = debutActiviteDate.getFullYear(); // Obtenez l'année de début d'activité
    const currentYear = new Date().getFullYear();
    const copyrightText = document.getElementById("copyright");

    if (enterprise === currentYear) {
        // Si l'année de création est la même que l'année en cours, affiche seulement l'année en cours
        copyrightText.innerHTML = `&copy; ${currentYear} BLEC Web SAS. Tous droits réservés.`;
    } else {
        // Sinon, affiche la plage d'années de l'année de création à l'année en cours
        copyrightText.innerHTML = `&copy; ${yearOfCreation}-${currentYear} BLEC Web SAS. Tous droits réservés.`;
    }
});


/*

document.addEventListener("DOMContentLoaded", function() {
    console.log('Script copyright.js loaded'); // Vérifiez le chargement du script

    const enterprise = window.enterpriseData;
    const enterprise2 = window.enterpriseData2;
    console.log('enterprise data:', enterprise); // Vérifiez les données de l'entreprise
    console.log('enterprise data2:', enterprise2); // Vérifiez les données de l'entreprise

    if (enterprise && enterprise.length > 0) {
        const debutActiviteDate = new Date(enterprise);
        console.log('debutActiviteDate:', debutActiviteDate); // Vérifiez la date de début d'activité

        const yearOfCreation = debutActiviteDate.getFullYear();
        console.log('yearOfCreation:', yearOfCreation); // Vérifiez l'année de création

        const currentYear = new Date().getFullYear();
        console.log('currentYear:', currentYear); // Vérifiez l'année en cours

        const copyrightText = document.getElementById("copyright");

        if (yearOfCreation === currentYear) {
            // Si l'année de création est la même que l'année en cours, affiche seulement l'année en cours
            copyrightText.innerHTML = `&copy; ${currentYear} BLEC Web SAS. Tous droits réservés`;
        } else {
            // Sinon, affiche la plage d'années de l'année de création à l'année en cours
            copyrightText.innerHTML = `&copy; ${yearOfCreation}-${currentYear} BLEC Web SAS. Tous droits réservés`;
        }
    } else {
        console.log('Erreur : Les données de l\'entreprise sont vides ou non définies.');
    }
});










