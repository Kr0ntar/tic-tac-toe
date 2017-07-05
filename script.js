var gameBoard = document.querySelector("#tic-tac-toe");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");
var c5 = document.querySelector("#c5");
var c6 = document.querySelector("#c6");
var c7 = document.querySelector("#c7");
var c8 = document.querySelector("#c8");
var c9 = document.querySelector("#c9");
var btnX = document.querySelector("#ecks");
var btnO = document.querySelector("#oww");
var playAgainBtn = document.querySelector("#play-again");
var backBtn = document.querySelector("#back-btn");
var cell = document.querySelectorAll(".cell-data");
var table = document.querySelector("#table");
var choiceBtns = document.querySelector("#choice-buttons");
var playerStatus = document.querySelector("#player-status");
var gameOverMsg = document.querySelector("#game-over-msg");
var errorMsg = document.querySelector("#error-msg");
var statusMsg = document.querySelector("#status-msg");
var msg = document.querySelector("#message");
var playerMove = "";
var cpuMove = "";
var turn = 5;


/* button events */
btnX.addEventListener('click', function() {
	playerMove = "X";
	cpuMove = "O";
	choiceBtns.style.display = "none";
	playerStatus.style.display = "block";
	statusMsg.textContent = "You play as X";
});

btnO.addEventListener('click', function() {
	playerMove = "O";
	cpuMove = "X";
	choiceBtns.style.display = "none";
	playerStatus.style.display = "block";
	statusMsg.textContent = "You play as O";
});

playAgainBtn.addEventListener('click', function() {
	location.reload();
});

backBtn.addEventListener('click', function() {
	errorMsg.style.display = "none";
	choiceBtns.style.display = "block";
});


/* td cells events */
for(var i = 0; i < 9; i++) {
	cell[i].addEventListener('click', function() {
		if(this.textContent == "" && playerMove == "") {
			choiceBtns.style.display = "none";
			errorMsg.style.display = "block";
			return false;
		} else if(this.textContent == "") {
			this.textContent = playerMove;
			turn--;
		} else {
			return false;
		}
		compAI();
	});
}


/* CPU AI */
function compAI() {
	var ifPlayerWin = playerWin();
	if(ifPlayerWin === true) {
		gameOver("player");
		return false;
	}

	var compWinChance = compAttack();
	if(compWinChance === true) {
		gameOver("cpu");
		return false;
	}

	if(turn === 0) {
		console.log("It's A Draw!");
		gameOver("draw");
		return false;
	}
	
	var compCounter = compDefense();
	if(compCounter === false) {
		getRandomElement();
	} 	

	function compAttack() {
		if(c1.textContent == cpuMove && c2.textContent == cpuMove && c3.textContent == "") {
			c3.textContent = cpuMove;
			return true;
		}

		if(c1.textContent == cpuMove && c3.textContent == cpuMove && c2.textContent == "") {
			c2.textContent = cpuMove;
			return true;
		}	

		if(c1.textContent == cpuMove && c4.textContent == cpuMove && c7.textContent == "") {
			c7.textContent = cpuMove;
			return true;
		} 

		if(c1.textContent == cpuMove && c5.textContent == cpuMove && c9.textContent == "") {
			c9.textContent = cpuMove;
			return true;
		}

		if(c1.textContent == cpuMove && c7.textContent == cpuMove && c4.textContent == "") {
			c4.textContent = cpuMove;
			return true;
		}

		if(c1.textContent == cpuMove && c9.textContent == cpuMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		} 

		if(c2.textContent == cpuMove && c3.textContent == cpuMove && c1.textContent == "") {
			c1.textContent = cpuMove;
			return true;
		} 

		if(c2.textContent == cpuMove && c5.textContent == cpuMove && c8.textContent == "") {
			c8.textContent = cpuMove;
			return true;
		}

		if(c2.textContent == cpuMove && c8.textContent == cpuMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		} 

		if(c3.textContent == cpuMove && c5.textContent == cpuMove && c7.textContent == "") {
			c7.textContent = cpuMove;
			return true;
		} 

		if(c3.textContent == cpuMove && c6.textContent == cpuMove && c9.textContent == "") {
			c9.textContent = cpuMove;
			return true;
		}

		if(c3.textContent == cpuMove && c7.textContent == cpuMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		}

		if(c3.textContent == cpuMove && c9.textContent == cpuMove && c6.textContent == "") {
			c6.textContent = cpuMove;
			return true;
		}

		if(c4.textContent == cpuMove && c5.textContent == cpuMove && c6.textContent == "") {
			c6.textContent = cpuMove;
			return true;
		}

		if(c4.textContent == cpuMove && c6.textContent == cpuMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		} 

		if(c4.textContent == cpuMove && c7.textContent == cpuMove && c1.textContent == "") {
			c1.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == cpuMove && c6.textContent == cpuMove && c4.textContent == "") {
			c4.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == cpuMove && c7.textContent == cpuMove && c3.textContent == "") {
			c3.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == cpuMove && c8.textContent == cpuMove && c2.textContent == "") {
			c2.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == cpuMove && c9.textContent == cpuMove && c1.textContent == "") {
			c1.textContent = cpuMove;
			return true;
		} 

		if(c6.textContent == cpuMove && c9.textContent == cpuMove && c3.textContent == "") {
			c3.textContent = cpuMove;
			return true;
		} 

		if(c7.textContent == cpuMove && c8.textContent == cpuMove && c9.textContent == "") {
			c9.textContent = cpuMove;
			return true;
		}

		if(c7.textContent == cpuMove && c9.textContent == cpuMove && c8.textContent == "") {
			c8.textContent = cpuMove;
			return true;
		}

		if(c8.textContent == cpuMove && c9.textContent == cpuMove && c7.textContent == "") {
			c7.textContent = cpuMove;
		}
		return false;
	}

	function compDefense() {
		if(c1.textContent == playerMove && c2.textContent == playerMove && c3.textContent == "") {
			c3.textContent = cpuMove;
			return true;
		}

		if(c1.textContent == playerMove && c3.textContent == playerMove && c2.textContent == "") {
			c2.textContent = cpuMove;
			return true;
		}	

		if(c1.textContent == playerMove && c4.textContent == playerMove && c7.textContent == "") {
			c7.textContent = cpuMove;
			return true;
		} 

		if(c1.textContent == playerMove && c5.textContent == playerMove && c9.textContent == "") {
			c9.textContent = cpuMove;
			return true;
		}

		if(c1.textContent == playerMove && c7.textContent == playerMove && c4.textContent == "") {
			c4.textContent = cpuMove;
			return true;
		}

		if(c1.textContent == playerMove && c9.textContent == playerMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		} 

		if(c2.textContent == playerMove && c3.textContent == playerMove && c1.textContent == "") {
			c1.textContent = cpuMove;
			return true;
		} 

		if(c2.textContent == playerMove && c5.textContent == playerMove && c8.textContent == "") {
			c8.textContent = cpuMove;
			return true;
		}

		if(c2.textContent == playerMove && c8.textContent == playerMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		} 

		if(c3.textContent == playerMove && c5.textContent == playerMove && c7.textContent == "") {
			c7.textContent = cpuMove;
			return true;
		} 

		if(c3.textContent == playerMove && c6.textContent == playerMove && c9.textContent == "") {
			c9.textContent = cpuMove;
			return true;
		}

		if(c3.textContent == playerMove && c7.textContent == playerMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		}

		if(c3.textContent == playerMove && c9.textContent == playerMove && c6.textContent == "") {
			c6.textContent = cpuMove;
			return true;
		}

		if(c4.textContent == playerMove && c5.textContent == playerMove && c6.textContent == "") {
			c6.textContent = cpuMove;
			return true;
		}

		if(c4.textContent == playerMove && c6.textContent == playerMove && c5.textContent == "") {
			c5.textContent = cpuMove;
			return true;
		} 

		if(c4.textContent == playerMove && c7.textContent == playerMove && c1.textContent == "") {
			c1.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == playerMove && c6.textContent == playerMove && c4.textContent == "") {
			c4.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == playerMove && c7.textContent == playerMove && c3.textContent == "") {
			c3.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == playerMove && c8.textContent == playerMove && c2.textContent == "") {
			c2.textContent = cpuMove;
			return true;
		} 

		if(c5.textContent == playerMove && c9.textContent == playerMove && c1.textContent == "") {
			c1.textContent = cpuMove;
			return true;
		} 

		if(c6.textContent == playerMove && c9.textContent == playerMove && c3.textContent == "") {
			c3.textContent = cpuMove;
			return true;
		} 

		if(c7.textContent == playerMove && c8.textContent == playerMove && c9.textContent == "") {
			c9.textContent = cpuMove;
			return true;
		}

		if(c7.textContent == playerMove && c9.textContent == playerMove && c8.textContent == "") {
			c8.textContent = cpuMove;
			return true;
		}

		if(c8.textContent == playerMove && c9.textContent == playerMove && c7.textContent == "") {
			c7.textContent = cpuMove;
			return true;
		}
		return false;
	}

	function playerWin() {
		if(c1.textContent == playerMove && c2.textContent == playerMove && c3.textContent == playerMove) {
			return true;
		}	

		if(c1.textContent == playerMove && c4.textContent == playerMove && c7.textContent == playerMove) {
			return true;
		} 

		if(c1.textContent == playerMove && c5.textContent == playerMove && c9.textContent == playerMove) {
			return true;
		}

		if(c2.textContent == playerMove && c5.textContent == playerMove && c8.textContent == playerMove) {
			return true;
		} 

		if(c3.textContent == playerMove && c5.textContent == playerMove && c7.textContent == playerMove) {
			return true;
		} 

		if(c3.textContent == playerMove && c6.textContent == playerMove && c9.textContent == playerMove) {
			return true;
		}

		if(c4.textContent == playerMove && c5.textContent == playerMove && c6.textContent == playerMove) {
			return true;
		}

		if(c7.textContent == playerMove && c8.textContent == playerMove && c9.textContent == playerMove) {
			return true;
		}
		return false;
	}

}

function getRandomElement() {
	var randNum = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
	var randElem = document.querySelector("#c" + randNum);
	if(randElem.textContent !== "") {
		getRandomElement();
	} else {
		randElem.textContent = cpuMove;
	}
}

function gameOver(winner) {
	for(var i = 0; i < 9; i++) {
		cell[i].classList.toggle("unclickable");
	}
	playerStatus.style.display = "none";
	gameOverMsg.style.display = "block";
	playerMove = "";
	cpuMove = "";
	switch(winner) {
		case "cpu":
			msg.textContent = "CPU Wins!";
		break;

		case "player":
			msg.textContent = "Player Wins!";
		break;

		case "draw":
			msg.textContent = "It's a draw!";
		break;
	}
	return false;
}