import detectedCollision from './collisionDetection.js';

export default class Brick {
  constructor(game, position) {
    this.position = position;
    this.width = 80;
    this.height = 20;
    this.game = game;
    this.displayOnScreen = true;
  }

  draw(context) {
    context.fillStyle = '#880';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.strokeRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  update(deltaTime) {
    if (detectedCollision(this.game.ball, this)) {
      this.displayOnScreen = false;
      this.game.ball.speed.y = -this.game.ball.speed.y;
    }
  }
}
