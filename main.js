

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const cactusLeft = parseInt(window.getComputedStyle(cactus)
    .getPropertyValue('left'));
  score.innerText++;

  if (cactusLeft < 0) {
    cactus.style.display = 'none';
  } else {
    cactus.style.display = ''
  }

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);




