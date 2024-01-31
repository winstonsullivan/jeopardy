document.addEventListener('DOMContentLoaded', () => {
    let player1Score = parseInt(localStorage.getItem('player1Score'), 10) || 0;
    let player2Score = parseInt(localStorage.getItem('player2Score'), 10) || 0;
    let currentPlayer = 1;

    const player1ScoreSpan = document.getElementById('player1-score');
    const player2ScoreSpan = document.getElementById('player2-score');
    const playerTurn = document.getElementById('player-turn');
    const betAmount = document.getElementById('bet-amount');
    const finalAnswer = document.getElementById('final-answer');
    const betButton = document.getElementById('bet-button');
    const submitButton = document.getElementById('submit-answer');
    const audioPlayer = document.getElementById('jeopardy-music');

    finalAnswer.disabled = true;

    function updateScores() {
        player1ScoreSpan.textContent = player1Score;
        player2ScoreSpan.textContent = player2Score;
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        playerTurn.textContent = `Player ${currentPlayer}'s Turn`;
        [betAmount, finalAnswer].forEach(input => input.value = '');
        [betAmount, betButton].forEach(element => element.disabled = false);
        [finalAnswer, submitButton].forEach(element => element.disabled = true);
    }

    function endGame() {
        playerTurn.textContent = "Game Complete";
        [betAmount, finalAnswer, betButton, submitButton].forEach(element => element.disabled = true);
    }

    betButton.addEventListener('click', () => {
        if (betAmount.value.trim()) {
            audioPlayer.play();
            finalAnswer.disabled = false;
            submitButton.disabled = false;
            betButton.disabled = true;
        }
    });

    submitButton.addEventListener('click', () => {
        audioPlayer.pause();
        currentPlayer === 2 ? endGame() : switchPlayer();
    });

    updateScores();
});
