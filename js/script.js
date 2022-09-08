function playGame(playerInput) {
	function printMessage(msg) {
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages() {
		document.getElementById('messages').innerHTML = '';
	}

	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		}
		else if (argMoveId == 3) {
			return 'nożyce';
		}
	}

	function displayResult(ComputerMove, PlayerMove) {
		if ((ComputerMove == 'kamień' && PlayerMove == 'papier') ||
			(ComputerMove == 'papier' && PlayerMove == 'nożyce') ||
			(ComputerMove == 'nożyce' && PlayerMove == 'kamień')) {
			printMessage('Wygrywasz');
		} else if (ComputerMove == PlayerMove) 
			 {
			printMessage('Remis');
		} else {
			printMessage('Komputer wygrywa');
		}

	}

	clearMessages();

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber); // 1 -> kamień
	printMessage('Mój ruch to: ' + computerMove);

	let playerMove = getMoveName(playerInput); // 2 -> nożyce
	printMessage('Twój ruch to: ' + playerMove);

	displayResult(playerMove, computerMove);


}

document.getElementById('play-rock').addEventListener('click', function () {
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
	playGame(3);
});
