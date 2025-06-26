// 🎞️ Slideshow Script
const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('show');
  index = (index + 1) % slides.length;
  slides[index].classList.add('show');
}, 3000); // change image every 3 seconds

// 🎉 Confetti Effect (simple JS)
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 50,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    tilt: Math.random() * 10 - 10,
    tiltAngleIncremental: Math.random() * 0.07 + 0.05,
    tiltAngle: 0
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((conf) => {
    ctx.beginPath();
    ctx.lineWidth = conf.r / 2;
    ctx.strokeStyle = conf.color;
    ctx.moveTo(conf.x + conf.tilt + conf.r / 4, conf.y);
    ctx.lineTo(conf.x + conf.tilt, conf.y + conf.tilt + conf.r / 4);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach((conf) => {
    conf.tiltAngle += conf.tiltAngleIncremental;
    conf.y += (Math.cos(conf.d) + 3 + conf.r / 2) / 2;
    conf.x += Math.sin(conf.d);
    conf.tilt = Math.sin(conf.tiltAngle - i / 3) * 15;

    if (conf.y > canvas.height) {
      conf.y = -10;
      conf.x = Math.random() * canvas.width;
    }
  });
}

function animateConfetti() {
  drawConfetti();
  requestAnimationFrame(animateConfetti);
}

animateConfetti();
