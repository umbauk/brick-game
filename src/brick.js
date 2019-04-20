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
    // side collision detection not working properly
    let collisionResult = detectedCollision(this.game.ball, this);
    if (collisionResult) {
      console.log(collisionResult);
      this.displayOnScreen = false;
      this.game.score += 50;
      if (collisionResult === 'top' || collisionResult === 'bottom')
        this.game.ball.speed.y = -this.game.ball.speed.y;
      else if (collisionResult === 'left' || collisionResult === 'right')
        this.game.ball.speed.x = -this.game.ball.speed.x;
      else {
        console.log('Should not be here');
      }
    }
  }
}
