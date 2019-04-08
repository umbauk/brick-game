// TODO
// [] new level
// [] side collision
// [] lives tracker
// [] score tracker
// [] high score table (need database?)

import Paddle from './paddle.js';
import Ball from './ball.js';
import InputHandler from './input.js';
import { buildLevel, level1, level2 } from './levels.js';

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
    this.currentGameState = GAMESTATE.MENU;
    this.gameObjects = [];
    new InputHandler(this.paddle, this);
  }

  start() {
    this.currentGameState = GAMESTATE.RUNNING;
    this.gameObjects = [this.paddle, this.ball, ...this.bricks];
    this.lives = 3;
  }

  draw(context) {
    if (this.currentGameState === GAMESTATE.PAUSED) {
      context.fillStyle = 'rgba(0,0,0,0.5)';
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
      context.font = '30px Arial';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText('Paused', this.gameWidth / 2, this.gameHeight / 2);
    } else if (this.currentGameState === GAMESTATE.MENU) {
      context.fillStyle = 'rgba(0,0,0,0.5)';
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
      context.font = '30px Arial';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText(
        'Ready Player One',
        this.gameWidth / 2,
        this.gameHeight / 2 - 40,
      );
      context.fillText(
        'Press <space> to START!',
        this.gameWidth / 2,
        this.gameHeight / 2,
      );
      context.fillText(
        'Press <escape> to PAUSE.',
        this.gameWidth / 2,
        this.gameHeight / 2 + 40,
      );
    } else if (this.lives === 0) {
      this.currentGameState = GAMESTATE.GAMEOVER;
      context.fillStyle = 'rgba(0,0,0,0.5)';
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
      context.font = '30px Arial';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText('GAME OVER :(', this.gameWidth / 2, this.gameHeight / 2);
    }
    this.gameObjects.forEach(object => object.draw(context));
  }

  update(deltaTime) {
    if (this.currentGameState === GAMESTATE.PAUSED) return;
    if (this.currentGameState === GAMESTATE.MENU) return;
    if (this.currentGameState === GAMESTATE.GAMEOVER) return;
    if (this.currentGameState === GAMESTATE.NEXTLEVEL) return;

    let bricksOnScreen = false;
    this.bricks.forEach(brick => {
      if (brick.displayOnScreen) bricksOnScreen = true;
    });

    if (bricksOnScreen === false) {
      this.nextLevel();
    }

    this.gameObjects.forEach(object => object.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(
      object => object.displayOnScreen,
    );
  }

  togglePause() {
    if (this.currentGameState === GAMESTATE.RUNNING) {
      this.currentGameState = GAMESTATE.PAUSED;
    } else {
      this.currentGameState = GAMESTATE.RUNNING;
    }
  }

  toggleMenu() {
    if (this.currentGameState === GAMESTATE.MENU) {
      this.currentGameState = GAMESTATE.RUNNING;
    }
  }

  nextLevel() {
    this.bricks = buildLevel(this, level2);
  }
}
