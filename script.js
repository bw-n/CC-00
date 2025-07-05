// Sélection de toutes les cases
const cells = document.querySelectorAll('.cell');
const effects = ['glitch', 'fade', 'halo'];

// Appliquer un effet aléatoire à une case (sauf celles marquées "fixed")
function randomEffect() {
  const eligibleCells = Array.from(cells).filter(cell => !cell.classList.contains('fixed'));
  const cell = eligibleCells[Math.floor(Math.random() * eligibleCells.length)];
  const effect = effects[Math.floor(Math.random() * effects.length)];

  cell.classList.add(effect);

  setTimeout(() => {
    cell.classList.remove(effect);
  }, 1500);
}

// Lancer le turnover toutes les 1.2 secondes
setInterval(randomEffect, 1200);

// Configuration de la case 1 (cell-0)
const cell0 = document.getElementById('cell-0');

// Appliquer le logo BW
cell0.style.backgroundImage = "url('https://github.com/bw-n/CC-00/blob/main/assets/333_Creative_Chain_logo_BW_WEB_byJOWEL_HOMESKILLZ.jpg?raw=true')";
cell0.style.backgroundSize = "cover";
cell0.style.backgroundPosition = "center";
cell0.style.backgroundRepeat = "no-repeat";

// Ajouter un effet d’intro (halo)
cell0.classList.add('halo');

// Marquer cette case comme fixe pour l’exclure du turnover
cell0.classList.add('fixed');

// Glitch récurrent sur la case 1 (toutes les 6 secondes)
setInterval(() => {
  cell0.classList.add('glitch');
  setTimeout(() => {
    cell0.classList.remove('glitch');
  }, 300); // durée du glitch
}, 6000); // fréquence du glitch
