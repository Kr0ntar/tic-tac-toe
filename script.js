var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");
var c5 = document.querySelector("#c5");
var c6 = document.querySelector("#c6");
var c7 = document.querySelector("#c7");
var c8 = document.querySelector("#c8");
var c9 = document.querySelector("#c9");
var ans = "O";
var choice1 = "";
var choice2 = "";
var firstTurn = 0;

if(ans == "X") {
	choice1 = "X";
	choice2 = "O";
} else {
	choice1 = "O";
	choice2 = "X";
}


c1.addEventListener('click', function() {
	if(c1.textContent == "") {
		c1.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c2.addEventListener('click', function() {
	if(c2.textContent == "") {
		c2.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c3.addEventListener('click', function() {
	if(c3.textContent == "") {
		c3.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c4.addEventListener('click', function() {
	if(c4.textContent == "") {
		c4.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c5.addEventListener('click', function() {
	if(c5.textContent == "") {
		c5.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c6.addEventListener('click', function() {
	if(c6.textContent == "") {
		c6.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c7.addEventListener('click', function() {
	if(c7.textContent == "") {
		c7.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c8.addEventListener('click', function() {
	if(c8.textContent == "") {
		c8.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

c9.addEventListener('click', function() {
	if(c9.textContent == "") {
		c9.textContent = choice1;
	} else {
		return false;
	}
	firstTurn++;
	compAI();
});

function compAI() {
	var checker = combinations();

	if(checker === false) {
		getRandomElement();	
	}

	function combinations() {
		if(c1.textContent == choice1 && c2.textContent == choice1 && c3.textContent == "") {
			c3.textContent = choice2;
			return true;
		}

		if(c1.textContent == choice1 && c3.textContent == choice1 && c2.textContent == "") {
			c2.textContent = choice2;
			return true;
		}	

		if(c1.textContent == choice1 && c4.textContent == choice1 && c7.textContent == "") {
			c7.textContent = choice2;
			return true;
		} 

		if(c1.textContent == choice1 && c5.textContent == choice1 && c9.textContent == "") {
			c9.textContent = choice2;
			return true;
		}

		if(c1.textContent == choice1 && c7.textContent == choice1 && c4.textContent == "") {
			c4.textContent = choice2;
			return true;
		}

		if(c1.textContent == choice1 && c9.textContent == choice1 && c5.textContent == "") {
			c5.textContent = choice2;
			return true;
		} 

		if(c2.textContent == choice1 && c3.textContent == choice1 && c1.textContent == "") {
			c1.textContent = choice2;
			return true;
		} 

		if(c2.textContent == choice1 && c5.textContent == choice1 && c8.textContent == "") {
			c8.textContent = choice2;
			return true;
		}

		if(c2.textContent == choice1 && c8.textContent == choice1 && c5.textContent == "") {
			c5.textContent = choice2;
			return true;
		} 

		if(c3.textContent == choice1 && c5.textContent == choice1 && c7.textContent == "") {
			c7.textContent = choice2;
			return true;
		} 

		if(c3.textContent == choice1 && c6.textContent == choice1 && c9.textContent == "") {
			c9.textContent = choice2;
			return true;
		}

		if(c3.textContent == choice1 && c7.textContent == choice1 && c5.textContent == "") {
			c5.textContent = choice2;
			return true;
		}

		if(c3.textContent == choice1 && c9.textContent == choice1 && c6.textContent == "") {
			c6.textContent = choice2;
			return true;
		}

		if(c4.textContent == choice1 && c5.textContent == choice1 && c6.textContent == "") {
			c6.textContent = choice2;
			return true;
		}

		if(c4.textContent == choice1 && c6.textContent == choice1 && c5.textContent == "") {
			c5.textContent = choice2;
			return true;
		} 

		if(c4.textContent == choice1 && c7.textContent == choice1 && c1.textContent == "") {
			c1.textContent = choice2;
			return true;
		} 

		if(c5.textContent == choice1 && c6.textContent == choice1 && c4.textContent == "") {
			c4.textContent = choice2;
			return true;
		} 

		if(c5.textContent == choice1 && c7.textContent == choice1 && c3.textContent == "") {
			c3.textContent = choice2;
			return true;
		} 

		if(c5.textContent == choice1 && c8.textContent == choice1 && c2.textContent == "") {
			c2.textContent = choice2;
			return true;
		} 

		if(c5.textContent == choice1 && c9.textContent == choice1 && c1.textContent == "") {
			c1.textContent = choice2;
			return true;
		} 

		if(c6.textContent == choice1 && c9.textContent == choice1 && c3.textContent == "") {
			c3.textContent = choice2;
			return true;
		} 

		if(c7.textContent == choice1 && c8.textContent == choice1 && c9.textContent == "") {
			c9.textContent = choice2;
			return true;
		}

		if(c7.textContent == choice1 && c9.textContent == choice1 && c8.textContent == "") {
			c8.textContent = choice2;
			return true;
		}

		if(c8.textContent == choice1 && c9.textContent == choice1 && c7.textContent == "") {
			c7.textContent = choice2;
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
		randElem.textContent = choice2;
	}
}