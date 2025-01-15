let randomNumber = Math.floor(Math.random() * 100) + 1;
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('checkBtn');
const restartBtn = document.getElementById('restartBtn');
const guessInput = document.getElementById('guess');

checkBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        feedback.style.color = 'red';
        return;
    }

    if (userGuess === randomNumber) {
        feedback.textContent = `Parabéns! Você acertou! O número era ${randomNumber}.`;
        feedback.style.color = 'green';
        checkBtn.style.display = 'none';
        restartBtn.style.display = 'inline';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Muito alto! Tente novamente.';
        feedback.style.color = 'orange';
    } else {
        feedback.textContent = 'Muito baixo! Tente novamente.';
        feedback.style.color = 'orange';
    }
});

restartBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    feedback.textContent = '';
    guessInput.value = '';
    checkBtn.style.display = 'inline';
    restartBtn.style.display = 'none';
});