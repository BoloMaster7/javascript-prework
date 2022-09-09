function playGame(playerInput) {
	function printMessage(msg) {
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages() {
		document.getElementById('messages').innerHTML = '';
	}

	let getMoveName = function (computerMove) {
		if (computerMove == 1) {
			return 'kamień';
		} else if (computerMove == 2) {
			return 'papier';
		}
		else if (computerMove == 3) {
			return 'nożyce';
		}
	}

	function displayResult(computerMove, playerMove) {
		if ((computerMove == 'kamień' && playerMove == 'papier') ||
			(computerMove == 'papier' && playerMove == 'nożyce') ||
			(computerMove == 'nożyce' && playerMove == 'kamień')) {
			printMessage('Wygrywasz');
		} else if (computerMove == playerMove) 
			 {
			printMessage('Remis');
		} else {
			printMessage('Komputer wygrywa');
		}

	}

	clearMessages();

	const randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber); // 1 -> kamień
	printMessage('Mój ruch to: ' + computerMove);

	let playerMove = getMoveName(playerInput); // 2 -> nożyce
	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);


}
window.onload = function() {
document.getElementById('play-rock').addEventListener('click', function () {
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
	playGame(3);
});
}
