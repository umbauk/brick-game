import Paddle from './paddle.js';
import Ball from './ball.js';
import InputHandler from './input.js';
import { buildLevel, level1 } from './levels.js';

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.paddle, this.ball, ...bricks];

    new InputHandler(this.paddle);
  }

  draw(context) {
    this.gameObjects.forEach(object => object.draw(context));
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
    this.gameObjects.filter(object => object.displayOnScreen);
  }
}
