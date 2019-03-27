export default class InputHandler {
  constructor(paddle) {
    addEventListener('keydown', event => {
      // left: 37, right: 39
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
      }
    });

    addEventListener('keyup', event => {
      // left: 37, right: 39
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
