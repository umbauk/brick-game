import detectedCollision from './collisionDetection.js';

export default class ball {
  constructor(game) {
    this.radius = 7;
    this.position = {
      x: 0 + this.radius,
      y: 0 + this.radius,
    };
    this.speed = {
      x: 4,
      y: 4,
    };
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.displayOnScreen = true;
  }

  draw(context) {
    context.fillStyle = '#f00';
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      true,
    );
    context.fill();
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Check if hitting top or bottom of canvas
    if (
      this.position.x - this.radius <= 0 ||
      this.position.x > this.gameWidth - this.radius
    )
      this.speed.x = -this.speed.x;

    // Check if hitting sides of canvas
    if (
      this.position.y - this.radius <= 0 ||
      this.position.y > this.gameHeight - this.radius
    )
      this.speed.y = -this.speed.y;

    // Check if hitting paddle
    if (detectedCollision(this, this.game.paddle)) this.speed.y = -this.speed.y;
  }
}
