function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
		
	  return 'kamień';
	} else if (argMoveId == 2){
		return 'papier';
	}
	else if (argMoveId == 3){
		return 'nożyce';
	}
	else
	{
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
  }
  function DisplayResult(argComputerMove, argPlayerMove){
	if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
	(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
	(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
	printMessage ('Wygrywasz');
	} else if ((argComputerMove == argPlayerMove) ||
	(argPlayerMove == 'nieznany ruch'))
	{
	printMessage ('Remis');
	} else{
		printMessage ('Komputer wygrywa');
		}
		console.log (DisplayResult);
	}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + argPlayerMove);

DisplayResult(argComputerMove, argPlayerMove);


/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';
  }
  else if(randomNumber == 3){
	computerMove = 'nożyce';
  }
 */	



/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove = 'papier';
  }
  else if(playerInput == '3'){
	playerMove = 'nożyce';
  }
printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  }
  else if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Komputer wygrywa!');
  }
  else if( computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis!');
  }
  else if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
	printMessage('Remis!');
  }
  else if( computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Komputer wygrywa!');
  }		
	else if( computerMove == 'papier' && playerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	}		
else if( computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis!');
  }
  else if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
	printMessage('Remis!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Komputer wygrywa!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
	printMessage('Remis!');
  }	 */					