const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{ x: 200, y: 200 }];
let dx = 20;
let dy = 0;
let food = { x: 100, y: 100 };

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  if (e.key === "ArrowUp") { dx = 0; dy = -20; }
  if (e.key === "ArrowDown") { dx = 0; dy = 20; }
  if (e.key === "ArrowLeft") { dx = -20; dy = 0; }
  if (e.key === "ArrowRight") { dx = 20; dy = 0; }
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 400, 400);

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);

  ctx.fillStyle = "lime";
  snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));

  let head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor(Math.random() * 20) * 20,
      y: Math.floor(Math.random() * 20) * 20
    };
  } else {
    snake.pop();
  }
}

setInterval(draw, 100);
