
let player = "O";
let turnsTaken = 0;
let gameIsOver = false;

function changePlayers() {
    turnsTaken = turnsTaken + 1;
    if (player === "X") {
        player = "O";
    } else if (player === "O") {
        player = "X";
    }
}

function tieGame() {
    if (turnsTaken > 8 && gameIsOver === false) {
        $("h1").text("It's a draw!");
        gameIsOver = true;
    }
}

function performLogic(button,tile) {
    $(button).hide();
    $(tile).html(player);
    changePlayers();
    tieGame()

    if ( checkWin () ) {
        $("h1").text(player + "wins!");
        gameIsOver=true; 
    }
}

 function checkEqualValues(tile1, tile2, tile3) {
    return $(tile1).text() === $(tile2).val() && $(tile2).val() === $(tile3).val() 
 }

 function checkVerticalWins() {
    return checkEqualValues("#tile1","#tile4","#tile7") || checkEqualValues("#tile2","#tile5","#tile8") || checkEqualValues("#tile3","#tile6","#tile9")
 }

 function checkHorizontalWins() {
    return false
 }

 function checkDiagonalWins() {
    return false
 }

 function checkWin() {
    return checkHorizontalWins() || checkVerticalWins() || checkDiagonalWins()
 }




$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

