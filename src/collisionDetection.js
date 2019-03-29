export default function detectedCollision(ball, gameObject) {
  // Check if hitting Object
  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftEdgeOfObject = gameObject.position.x;
  let rightEdgeOfObject = gameObject.position.x + gameObject.width;

  if (
    ball.position.y + ball.radius >= topOfObject &&
    ball.position.y <= bottomOfObject &&
    ball.position.x >= leftEdgeOfObject &&
    ball.position.x <= rightEdgeOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
