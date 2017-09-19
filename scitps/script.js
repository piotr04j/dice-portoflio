var btnNewGame = document.querySelector('.button__new'),
	btnInstruction = document.querySelector('.button__instruction'),
	btnRoll = document.querySelector('.button__roll'),
	btnHold = document.querySelector('.button__hold');	
	
	
	
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
	}
							
})

btnInstruction.addEventListener('click', function(){
	if (btnInstruction.innerHTML === 'instruction'){
		document.querySelector('.instruction').style.display = 'block';
		btnInstruction.innerHTML = 'X';
	} else {
		document.querySelector('.instruction').style.display = 'none';
		btnInstruction.innerHTML = 'instruction';
	}
})

btnRoll.addEventListener('click', function(){
	
	var result = Math.floor(Math.random()*6+1);
	console.log(result);
	document.querySelector('.dice').src = 'img/'+result+'.png';
	
})


