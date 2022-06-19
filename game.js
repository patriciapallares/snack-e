// 1 set a game loop. function thats going to repeat again and again
import {
  update as updateSnake,
  draw as drawSnake,
  snake_speed,
} from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < (1 / snake_speed)) return;
  lastRenderTime = currentTime
  // logics for the game
  update();
  // take the logics and draw it on the screen
  draw();
}

window.requestAnimationFrame(main);

function update(params) {
  updateSnake();
}

function draw(params) {
  drawSnake(gameBoard);
}
