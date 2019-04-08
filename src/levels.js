import Brick from './brick.js';

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick)
        bricks.push(
          new Brick(game, { x: 80 * brickIndex, y: 50 + 20 * rowIndex }),
        );
    });
  });

  return bricks;
}

export const level1 = [
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  //[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export const level2 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
