


document.addEventListener("DOMContentLoaded", function() {
 // const enterprise = require('../../app/data/enterprise.json');
 // const debutActiviteDate = new Date(enterprise[0].debut_activite);
 // const debutActiviteYear = debutActiviteDate.getFullYear();
  const debutActiviteYear = 2021;
  const currentYear = new Date().getFullYear();
  const copyrightText = document.getElementById("copyright");

console.log('debutActiviteYear', debutActiviteYear)

  if (debutActiviteYear === currentYear) {
    // Si l'année de création est la même que l'année en cours, affiche seulement l'année en cours
    copyrightText.innerHTML = `&copy; ${currentYear} BLEC Web SAS. Tous droits réservés.`;
  } else {
    // Sinon, affiche la plage d'années de l'année de création à l'année en cours
    copyrightText.innerHTML = `&copy; ${debutActiviteYear}-${currentYear} BLEC Web SAS. Tous droits réservés.`;
  }
});

