
const phrases = [
  'Même les chemins les plus créatifs peuvent rencontrer un détour. Ne vous inquiétez pas, explorons ensemble d\'autres voies inspirantes.',

  'Oups ! Cette page est introuvable, mais votre parcours vers la découverte continue. Prenons un moment pour retrouver notre chemin.',

  'Cette page semble avoir échappé à notre univers... Mais ne vous inquiétez pas, nous avons d\'autres mondes à explorer ensemble.',

  'Vous avez trouvé une route moins fréquentée. Laissez-nous vous guider vers des territoires plus familiers et tout aussi inspirants.',

  'Introuvable, mais pas inoubliable. Comme chaque idée unique, cette page avait son charme. Découvrons ensemble où d\'autres idées brillantes peuvent nous mener.',
    
  'Il semblerait que nous ayons pris un chemin inattendu. Pas de souci, chaque détour est une occasion de découvrir quelque chose de nouveau. Laissez-nous vous accompagner vers d\'autres horizons prometteurs.',

  'Ah, le mystère d\'une page non trouvée. Mais ne laissez pas cela freiner votre quête de connaissance. Il y a tant d\'autres trésors cachés à découvrir ensemble sur notre site.',

  'Vous avez touché les confins de l\'espace connu de notre site. Plutôt que de nous arrêter ici, poursuivons notre aventure vers des pages pleines de découvertes et d\'inspirations.',
  
  'Cette page s\'est évaporée dans l\'éther du web, mais notre voyage à travers l\'innovation et la créativité ne fait que commencer. Rejoignez-nous pour explorer d\'autres merveilles.',

  'Comme un pont suspendu dans le vide, cette page n\'est pas là où nous l\'espérions. Mais ne vous inquiétez pas, il y a de nombreux autres ponts vers la connaissance à traverser. Suivez-nous pour une exploration enrichissante.'
];

function displayRandomPhrase() {
  var randomIndex = Math.floor(Math.random() * phrases.length);
  var randomPhrase = phrases[randomIndex];
  document.getElementById('randomPhrase').innerHTML = randomPhrase;
}

// Appeler la fonction au chargement de la page
window.onload = displayRandomPhrase;
