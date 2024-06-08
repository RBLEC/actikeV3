const phrases500 = [
  'Nous sommes confrontés à un orage inattendu dans notre univers numérique. Tandis que nos équipes naviguent à travers cette tempête, nous vous remercions pour votre patience et compréhension.',

  'Il semble que nous ayons rencontré un peu de turbulence. Pas d\'inquiétude, nos meilleurs esprits sont déjà en train de remettre les choses en ordre. Merci de rester à bord avec nous.',

  'Un peu de mystère s\'est glissé dans notre système, causant des remous inattendus. Soyez assurés, nous sommes en train de déchiffrer ce code. Votre patience est notre boussole dans cette aventure.',

  'Comme toute bonne histoire, notre parcours a son lot de rebondissements. Nous sommes actuellement en train de naviguer à travers un chapitre surprenant. Votre soutien est notre lumière phare.',

  'Notre site semble avoir pris une pause inattendue pour une courte méditation. Nous travaillons à réveiller sa conscience. Merci de revenir dans un instant pour continuer cette expérience ensemble.',
];

function displayRandomPhrase500() {
  var randomIndex = Math.floor(Math.random() * phrases500.length);
  var randomPhrase500 = phrases500[randomIndex];
  document.getElementById('randomPhrase500').innerHTML = randomPhrase500;
}
// Appeler la fonction au chargement de la page
window.onload = displayRandomPhrase500;
