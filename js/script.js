function playGame(playerInput){
	clearMessages();
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

/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + argPlayerMove);

DisplayResult(argComputerMove, argPlayerMove);


}
document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
  });
 document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
  });
 document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
  });

/*

/*
function buttonClicked(){
	printMessage('Zagrano kamień');
  }
  
  let playrock = document.getElementById('play-rock');
  
  playrock.addEventListener('click', buttonClicked);
 
  function buttonClicked(){
	printMessage('Zagrano papier');}

  
  let playpaper = document.getElementById('play-paper');
  
  playpaper.addEventListener('click', buttonClicked);

  function buttonClicked(){
	printMessage('Zagrano nożyce');
  }
  
  let playscissors = document.getElementById('play-scissors');
  
  playscissors.addEventListener('click', buttonClicked); */

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


