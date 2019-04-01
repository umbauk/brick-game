import Paddle from './paddle.js';
import Ball from './ball.js';
import InputHandler from './input.js';
import { buildLevel, level1 } from './levels.js';

const GAMESTATE = {
  RUNNING: 0,
  PAUSED: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4,
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = buildLevel(this, level1);
  }

  start() {
    this.currentGameState = GAMESTATE.RUNNING;
    this.gameObjects = [this.paddle, this.ball, ...this.bricks];
    new InputHandler(this.paddle, this);
  }

  draw(context) {
    if (this.currentGameState === GAMESTATE.PAUSED) {
      context.fillStyle = '#555';
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
    }
    this.gameObjects.forEach(object => object.draw(context));
  }

  update(deltaTime) {
    if (this.currentGameState === GAMESTATE.PAUSED) return;

    this.gameObjects.forEach(object => object.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(
      object => object.displayOnScreen,
    );
  }

  togglePause() {
    if (this.currentGameState === GAMESTATE.RUNNING) {
      this.currentGameState = GAMESTATE.PAUSED;
    } else if (this.currentGameState === GAMESTATE.PAUSED) {
      this.currentGameState = GAMESTATE.RUNNING;
    }
  }
}
