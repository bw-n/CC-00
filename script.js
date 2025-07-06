// Sélection de toutes les cases
const cells = document.querySelectorAll('.cell');
const effects = ['glitch', 'fade', 'halo'];

// Images par case (3 images minimum par case)
const cellImages = {
  'cell-0': ['assets/cell-0-1.jpg', 'assets/cell-0-2.jpg', 'assets/cell-0-3.jpg'],
  'cell-1': ['assets/cell-1-1.jpg', 'assets/cell-1-2.jpg', 'assets/cell-1-3.jpg'],
  'cell-2': ['assets/cell-2-1.jpg', 'assets/cell-2-2.jpg', 'assets/cell-2-3.jpg'],
  'cell-3': ['assets/cell-3-1.jpg', 'assets/cell-3-2.jpg', 'assets/cell-3-3.jpg'],
  'cell-4': ['assets/cell-4-1.jpg', 'assets/cell-4-2.jpg', 'assets/cell-4-3.jpg'],
  'cell-5': ['assets/cell-5-1.jpg', 'assets/cell-5-2.jpg', 'assets/cell-5-3.jpg'],
  'cell-6': ['assets/cell-6-1.jpg', 'assets/cell-6-2.jpg', 'assets/cell-6-3.jpg'],
  'cell-7': ['assets/cell-7-1.jpg', 'assets/cell-7-2.jpg', 'assets/cell-7-3.jpg'],
  'cell-8': ['assets/cell-8-1.jpg', 'assets/cell-8-2.jpg', 'assets/cell-8-3.jpg']
};

// Fonction pour changer l’image d’une case
function rotateImage(cellId) {
  const cell = document.getElementById(cellId);
  const images = cellImages[cellId];
  const img = images[Math.floor(Math.random() * images.length)];

  cell.style.backgroundImage = `url('${img}')`;
  cell.style.backgroundSize = 'cover';
  cell.style.backgroundPosition = 'center';
  cell.style.backgroundRepeat = 'no-repeat';

  // 🎯 Cas spécial : cell-0 → afficher texte uniquement sur cell-0-3.jpg
  if (cellId === 'cell-0') {
    const existing = cell.querySelector('span');
    if (existing) existing.remove();

    if (img.includes('cell-0-3.jpg')) {
      typeText(cell, '>>> creative.chain/01');
    }
  }
}

// Fonction d’écriture animée (machine à écrire)
function typeText(cell, text, speed = 80) {
  const span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.zIndex = '2';
  span.style.bottom = '10px';
  span.style.left = '10px';
  span.style.color = '#ccc';
  span.style.fontSize = '14px';
  span.style.fontFamily = 'monospace';
  span.style.background = 'rgba(0, 0, 0, 0.4)';
  span.style.padding = '4px 6px';
  span.style.borderRadius = '4px';
  span.style.pointerEvents = 'none';
  cell.appendChild(span);

  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

// Appliquer un effet aléatoire à une case (hors .fixed)
function randomEffect() {
  const eligibleCells = Array.from(cells).filter(cell => !cell.classList.contains('fixed'));
  const cell = eligibleCells[Math.floor(Math.random() * eligibleCells.length)];
  const effect = effects[Math.floor(Math.random() * effects.length)];

  cell.classList.add(effect);
  setTimeout(() => {
    cell.classList.remove(effect);
  }, 1500);
}

// Turnover d’image par case (individuel)
Object.keys(cellImages).forEach(cellId => {
  setInterval(() => {
    rotateImage(cellId);
  }, 3000); // chaque case change toutes les 3s
});

// Turnover d’effets visuels aléatoires
setInterval(randomEffect, 1200);

// Turnover de position des cases dans la grille
function shuffleCells() {
  const grid = document.getElementById('grid');
  const shuffled = Array.from(cells).sort(() => Math.random() - 0.5);
  shuffled.forEach(cell => grid.appendChild(cell));
}
setInterval(shuffleCells, 5000);

// 🎯 Configuration spéciale pour la case 0 (cell-0)
const cell0 = document.getElementById('cell-0');

// Appliquer le logo BW comme image initiale
cell0.style.backgroundImage = "url('https://github.com/bw-n/CC-00/blob/main/assets/333_Creative_Chain_logo_BW_WEB_byJOWEL_HOMESKILLZ.jpg?raw=true')";
cell0.style.backgroundSize = 'cover';
cell0.style.backgroundPosition = 'center';
cell0.style.backgroundRepeat = 'no-repeat';

// Ajouter un effet d’intro (halo)
cell0.classList.add('halo');

// Marquer cette case comme fixe pour l’exclure des effets aléatoires
cell0.classList.add('fixed');

// Glitch récurrent sur la case 0 (toutes les 6 secondes)
setInterval(() => {
  cell0.classList.add('glitch');
  setTimeout(() => {
    cell0.classList.remove('glitch');
  }, 300);
}, 6000);
