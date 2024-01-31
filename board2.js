document.addEventListener('DOMContentLoaded', () => {
    const player1ScoreSpan = document.getElementById('player1-score');
    const player2ScoreSpan = document.getElementById('player2-score');
    const responseInput = document.getElementById('player-response');
    let player1Score = parseInt(localStorage.getItem('player1Score'), 10) || 0;
    let player2Score = parseInt(localStorage.getItem('player2Score'), 10) || 0;
    let currentPlayer = 1;

    function updateScores() {
        player1ScoreSpan.textContent = player1Score;
        player2ScoreSpan.textContent = player2Score;
    }

    function updatePlayerTurn() {
        document.getElementById('player-turn').textContent = `Player ${currentPlayer}'s Turn`;
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updatePlayerTurn();
    }

    document.querySelectorAll('.points').forEach(pointDiv => {
        pointDiv.addEventListener('click', () => {
            responseInput.value = pointDiv.textContent;
        });
    });

    document.getElementById('correct-button').addEventListener('click', () => {
        const pointsValue = parseInt(responseInput.value, 10);
        if (!isNaN(pointsValue)) {
            if (currentPlayer === 1) player1Score += pointsValue;
            else player2Score += pointsValue;
            updateScores();
            switchPlayer();
            responseInput.value = '';
        }
    });

    document.getElementById('incorrect-button').addEventListener('click', () => {
        const pointsValue = parseInt(responseInput.value, 10);
        if (!isNaN(pointsValue)) {
            if (currentPlayer === 1) player1Score -= pointsValue;
            else player2Score -= pointsValue;
            updateScores();
            switchPlayer();
            responseInput.value = '';
        }
    });

    updateScores();
    updatePlayerTurn();

    function saveScores() {
        localStorage.setItem('player1Score', player1Score.toString());
        localStorage.setItem('player2Score', player2Score.toString());
    }

    document.querySelector('.next-round-button').addEventListener('click', saveScores);
});
