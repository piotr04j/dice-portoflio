var btnNewGame = document.querySelector('.button__new'),
	btnInstruction = document.querySelector('.button__instruction'),
	btnRoll = document.querySelector('.button__roll'),
	btnHold = document.querySelector('.button__hold'),
	playerOne = document.getElementById('js-player-0'),
	playerTwo = document.getElementById('js-player-1'),
	score = [0,0];
	activePayer = 0,
	currentScore = 0;
	
	btnRoll.style.display = 'none';
	btnHold.style.display = 'none';


btnNewGame.addEventListener('click', function(){
							
	if (btnNewGame.innerHTML === 'new game'){
		btnRoll.style.display = 'block';
		btnHold.style.display = 'block';
		btnNewGame.innerHTML = 'again';
		
	} else {
		btnRoll.style.display = 'none';
		btnHold.style.display = 'none';
		btnNewGame.innerHTML = 'new game';
		initGame();
	}
							
})

btnHold.addEventListener('click', function(){
	
	
	score[activePayer] += currentScore;
	document.getElementById('score-'+activePayer).innerHTML = score[activePayer];
	if ( score[activePayer] >= 10){
		document.getElementById('js-player-'+ activePayer).classList.add('winner');
		document.getElementById('name-' + activePayer).textContent = 'Winner!';
		btnHold.style.display = 'none';
		btnRoll.style.display = 'none';
	}
	activePlayer();
	setCurrentDefault();
	currentScore = 0;
})

btnRoll.addEventListener('click', function(){
	
	var result = Math.floor(Math.random() * 6) +1;
		
	document.querySelector('.dice').src = 'img/'+result+'.png';
	
	if(result === 1){
		currentScore = 0;
		setCurrentDefault();
		activePlayer();	
	} else {
		currentScore +=result;
		document.getElementById('current-'+ activePayer).innerHTML = currentScore;
	}
})

function initGame(){
	document.querySelector('.dice').src = 'img/'+7+'.png';
	playerOne.classList.remove('active');		
	playerOne.classList.remove('winner');		playerOne.classList.add('active');
	playerTwo.classList.remove('active');
	playerTwo.classList.remove('winner');
	document.getElementById('score-0').innerHTML = 0;
	document.getElementById('score-1').innerHTML = 0;
	score = [0,0];
	setCurrentDefault();
	activePayer = 0;
}

function activePlayer(){
	playerOne.classList.toggle('active');		playerTwo.classList.toggle('active');
	if (activePayer === 0){
		activePayer = 1;
	} else {
		activePayer = 0;
	}
}

function setCurrentDefault() {
	document.getElementById('current-0').innerHTML = 0;
	document.getElementById('current-1').innerHTML = 0;
}
btnInstruction.addEventListener('click', function(){
	if (btnInstruction.innerHTML === 'instruction'){
		document.querySelector('.instruction').style.display = 'block';
		btnInstruction.innerHTML = 'X';
	} else {
		document.querySelector('.instruction').style.display = 'none';
		btnInstruction.innerHTML = 'instruction';
	}
})