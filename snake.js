export const snake_speed = 2;

const snakeBody = [{ x: 11, y: 11 }];

// take the position of a given segment and the segment after that is going to move to the previous position
export function update(params) {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  // snakeBody[0].x += 0;
  // snakeBody[0].y += 1;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}
