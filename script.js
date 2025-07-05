const cells = document.querySelectorAll('.cell');
const effects = ['glitch', 'fade', 'halo'];

function randomEffect() {
  const cell = cells[Math.floor(Math.random() * cells.length)];
  const effect = effects[Math.floor(Math.random() * effects.length)];

  cell.classList.add(effect);

  setTimeout(() => {
    cell.classList.remove(effect);
  }, 1500);
}

setInterval(randomEffect, 1200);
