export default class Brick {
  constructor(game, position) {
    this.position = position;
    this.width = 80;
    this.height = 20;
    this.game = game;
  }

  draw(context) {
    context.fillStyle = '#0f0';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.strokeRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  update(deltaTime) {}
}
