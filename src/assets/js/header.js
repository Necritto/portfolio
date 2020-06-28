particleBond();

function particleBond() {
  const canvas = document.querySelector(".canvas");
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = innerWidth - 17);
  let height = (canvas.height = innerHeight);
  const particles = [];
  const properties = {
    bgColor: "#000000",
    particleColor: "rgba(255, 40, 40, 1)",
    particleRadius: 3,
    particleCount: 60,
    particleMaxVelocity: 1,
    lineLength: 150,
    particleLife: 5,
  };

  window.addEventListener("resize", () => {
    width = canvas.width = innerWidth - 17;
    height = canvas.height = innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.velocityX =
        Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
      this.velocityY =
        Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
      this.life = Math.random() * properties.particleLife * 60;
    }

    reCalculateLife() {
      if (this.life < 1) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.velocityX =
          Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.velocityY =
          Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.life = Math.random() * properties.particleLife * 60;
      }
      this.life--;
    }

    position() {
      this.x += this.velocityX;
      this.y += this.velocityY;

      (this.x + this.velocityX > width && this.velocityX > 0) ||
      (this.x + this.velocityX < 0 && this.velocityX < 0)
        ? (this.velocityX *= -1)
        : this.velocityX;
      (this.y + this.velocityY > height && this.velocityY > 0) ||
      (this.y + this.velocityY < 0 && this.velocityY < 0)
        ? (this.velocityY *= -1)
        : this.velocityY;
    }

    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = properties.particleColor;
      ctx.fill();
    }
  }

  function reDrawBackground() {
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, width, height);
  }

  function drawLines() {
    let x1, x2, y1, y2, length, opacity;
    for (let particle1 of particles) {
      for (let particle2 of particles) {
        x1 = particle1.x;
        x2 = particle2.x;
        y1 = particle1.y;
        y2 = particle2.y;
        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (length < properties.lineLength) {
          opacity = 1 - length / properties.lineLength;
          ctx.lineWidth = "0.5";
          ctx.strokeStyle = `rgba(255, 40, 40, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }

  function reDrawParticles() {
    for (let particle of particles) {
      particle.position();
      particle.reDraw();
      particle.reCalculateLife();
    }
  }

  function loop() {
    reDrawBackground();
    reDrawParticles();
    drawLines();
    requestAnimationFrame(loop);
  }

  function init() {
    for (let i = 0; i < properties.particleCount; i++) {
      particles.push(new Particle());
    }
    loop();
  }

  init();
}
