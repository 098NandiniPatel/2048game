var board;
var score = 0;
var row = 4;
var col = 4;
window.onload = function () {
  setGame();
};
function setGame() {
  // board=[
  //   [0,0,0,0],
  //   [0,4,0,0],
  //   [0,0,0,0],
  //   [0,0,0,0]
  // ]
  board = [
    [2, 2, 4, 8],
    [4, 8, 2, 16],
    [4, 8, 32, 2],
    [0, 0, 2, 2],
  ];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      //<div id="0-0"></div>
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      document.getElementById("board").append(tile);
    }
  }
  setTwo();
  setTwo();
}
function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = "";
  tile.classList.add("tile");
  if (num > 0) {
    tile.innerText = num;
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add("x8192");
    }
  }
}
