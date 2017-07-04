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
var playerMove = "";
var cpuMove = "";
var firstTurn = 0;

btnX.addEventListener('click', function() {
	playerMove = "X";
	cpuMove = "O";
	this.disabled = true;
	btnO.disabled = true;
});

btnO.addEventListener('click', function() {
	playerMove = "O";
	cpuMove = "X";
	this.disabled = true;
	btnX.disabled = true;
});

c1.addEventListener('click', function() {
	if(c1.textContent == "" && playerMove == "") {
		return false;
	} else if(c1.textContent == "") {
		c1.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c2.addEventListener('click', function() {
	if(c2.textContent == "" && playerMove == "") {
		return false;
	} else if(c2.textContent == "") {
		c2.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c3.addEventListener('click', function() {
	if(c3.textContent == "" && playerMove == "") {
		return false;
	} else if(c3.textContent == "") {
		c3.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c4.addEventListener('click', function() {
	if(c4.textContent == "" && playerMove == "") {
		return false;
	} else if(c4.textContent == "") {
		c4.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c5.addEventListener('click', function() {
	if(c5.textContent == "" && playerMove == "") {
		return false;
	} else if(c5.textContent == "") {
		c5.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c6.addEventListener('click', function() {
	if(c6.textContent == "" && playerMove == "") {
		return false;
	} else if(c6.textContent == "") {
		c6.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c7.addEventListener('click', function() {
	if(c7.textContent == "" && playerMove == "") {
		return false;
	} else if(c7.textContent == "") {
		c7.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c8.addEventListener('click', function() {
	if(c8.textContent == "" && playerMove == "") {
		return false;
	} else if(c8.textContent == "") {
		c8.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

c9.addEventListener('click', function() {
	if(c9.textContent == "" && playerMove == "") {
		return false;
	} else if(c9.textContent == "") {
		c9.textContent = playerMove;
	} else {
		return false;
	}
	compAI();
});

function compAI() {
	var compWinChance = compAttack();
	var ifPlayerWin = playerWin();

	if(compWinChance === true) {
		console.log("CPU Wins!");
		return false;
	} else if(ifPlayerWin === true) {
		console.log("Player Wins!");
		return false;
	} else {
		var compCounter = compDefense();
		if(compCounter === false) {
			getRandomElement();
		} else {
			return false;
		}	
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