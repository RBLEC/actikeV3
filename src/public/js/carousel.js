
const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

let autoSlideInterval;
let isPaused = false;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id !== 'pause') {
      const calcNextSlide = e.target.id === "next" ? 1 : -1;
      const slideActive = document.querySelector(".slide.active");

      let newIndex = calcNextSlide + [...slides].indexOf(slideActive);

      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;

      updateActiveSlide(newIndex);
    }
  });
});

// Fonction pour mettre à jour la diapositive active
function updateActiveSlide(newIndex) {
  const slideActive = document.querySelector(".slide.active");
  const indicatorActive = document.querySelector(".indicator.active");

  slides[newIndex].classList.add("active");
  indicators[newIndex].classList.add("active");

  slideActive.classList.remove("active");
  indicatorActive.classList.remove("active");

  // Retirer l'info-card active précédente
  const prevInfoCard = slideActive.querySelector(".info-card");
  if (prevInfoCard) {
    prevInfoCard.classList.remove("active");
  }

  // Déclencher l'affichage de l'info-card avec un délai
  const newInfoCard = slides[newIndex].querySelector(".info-card");
  setTimeout(() => {
    newInfoCard.classList.add("active");
  }, 1000); // Délai d'une seconde
}

// Ajouter des écouteurs d'événements aux indicateurs
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    updateActiveSlide(index);
  });
});

// Fonction pour passer à la diapositive suivante
function showNextSlide() {
  const slideActive = document.querySelector(".slide.active");
  let newIndex = [...slides].indexOf(slideActive) + 1;

  if (newIndex >= slides.length) newIndex = 0;

  updateActiveSlide(newIndex);
}

// Rotation automatique toutes les 5 secondes pour l'image et 1 seconde après pour l'info-card
function startAutoSlide() {
  autoSlideInterval = setInterval(showNextSlide, 6000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Ajouter l'écouteur d'événement pour le bouton de pause
document.getElementById("pause").addEventListener("click", () => {
  if (isPaused) {
    startAutoSlide();
    document.getElementById("pause").textContent = "Pause";
  } else {
    stopAutoSlide();
    document.getElementById("pause").textContent = "Play";
  }
  isPaused = !isPaused;
});

// Commencer le défilement automatique au chargement de la page
startAutoSlide();


