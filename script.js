const path = document.querySelector('.ekg-motion path');

// Animate the stroke of the EKG path
gsap.fromTo(
  path,
  { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() },
  {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    ease: "power2.inOut"
  }
);

const canvas = document.getElementById('space');
const ctx = canvas.getContext('2d');

// Điều chỉnh kích thước canvas theo kích thước cửa sổ
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tạo các ngôi sao
const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random(),
    speed: Math.random() * 0.5 + 0.2
  });
}
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }
}

function updateStars() {
  for (let star of stars) {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
    star.alpha = Math.random() * 0.8 + 0.2;
  }
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
