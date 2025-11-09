var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;


window.onload = function() {
    setGame();

}
function setGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
}
for (let r = 0; r < 3; r++){
    for (let c = 0; c < 3; c++) {
        //<div id="0-0"></div>
        let Ttile = document.createElement('div');
        Ttile.id = r.toString() + "-" + c.toString();
        Ttile.classList.add("Ttile");
        if (r === 0 || r === 1) {
            Ttile.classList.add("horizontal-line");
        }
        if (c === 0 || c === 1) {
            Ttile.classList.add("vertical-line");
        }
        Ttile.addEventListener("click", setTile)
        document.getElementById("Tboard").append(Ttile);
    } 
}

function setTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-"); // "1-1" -> ["1","1"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != ' ') {
        return;
    }

    board[r][c] = currPlayer;
    this.innerText = currPlayer;


    //alternating btw players
    if (currPlayer == playerO) {
        currPlayer = playerX
    }
    else {
        currPlayer = playerO;
    }

    checkWinner();
}

    function checkWinner() {
        //checking horizontally
        for (let r = 0; r < 3; r++) {
            if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
                for (let i = 0; i < 3; i++){
                    let Ttile = document.getElementById(r.toString() + "-" + i.toString());
                    Ttile.classList.add("winner")
                }
                gameOver = true;
                return;
            }
        }
        //checking Vertically
        for (let c = 0; c < 3; c++) {
            if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' ') {
                for (let i = 0; i < 3; i++) {
                    let Ttile = document.getElementById(i.toString() + "-" + c.toString());
                    Ttile.classList.add("winner");
                }
                gameOver = true;
                return;
            }
        }

        //checking diagonally
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] !=' ') {
            for (let i =0; i <3; i++) {
                let Ttile = document.getElementById(i.toString() + "-" + i.toString());
                Ttile.classList.add("winner");
            }
            gameOver = true;
            return;
        }

        //checking anti-diagonally
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] !=' ') {
                //0-2
                let Ttile = document.getElementById("0-2").classList.add("winner");

                Ttile = document.getElementById("1-1").classList.add("winner");

                Ttile = document.getElementById("2-0").classList.add("winner");
            
            gameOver = true;
            return;
        }
    }