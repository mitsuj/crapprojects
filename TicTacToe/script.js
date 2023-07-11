let player = "X";
let gameEnded = false;
let xoro = document.getElementById("xoro");
for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    if (this.textContent === "" && !gameEnded) {
      this.textContent = player;
      winner();
      draw();
      if (player === "X") {
        player = "O";
      } else {
        player = "X";
      }
    }
    if (!gameEnded) {
      xoro.textContent = `${player}'s turn`;
    }
  });
}
const position = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
function winner() {
  for (let i = 0; i < position.length; i++) {
    if (
      document.getElementById(position[i][0]).textContent === player &&
      document.getElementById(position[i][1]).textContent === player &&
      document.getElementById(position[i][2]).textContent === player
    ) {
      gameEnded = true;
      xoro.textContent = `${player} won`;
      xoro.classList.add("win");
    }
  }
}
function draw() {
  let isDraw = true;
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById(i.toString()).textContent === "") {
      isDraw = false;
      break;
    }
  }
  if (isDraw && gameEnded === false) {
    gameEnded = true;
    xoro.textContent = "Draw, please restart...";
  }
}
function restart() {
  for (i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).textContent = "";
    player = "X";
    gameEnded = false;
    xoro.classList.remove("win");
    xoro.textContent = "X's turn";
  }
}
document.getElementById("reset").addEventListener("click", restart);
