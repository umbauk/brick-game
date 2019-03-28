export default function collisionDetecton(ball, gameObject) {
  // Check if hitting Object
  let topOfObject = gameObject.position.y;
  let leftEdgeOfObject = gameObject.position.x;
  let rightEdgeOfObject = gameObject.position.x + gameObject.width;

  if (
    ball.position.y + ball.radius >= topOfObject &&
    ball.position.x >= leftEdgeOfObject &&
    ball.position.x <= rightEdgeOfObject
  )
    ball.speed.y = -ball.speed.y;
}
