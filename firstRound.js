document.addEventListener('DOMContentLoaded', () => {
    const player1ScoreSpan = document.getElementById('player1-score');
    const player2ScoreSpan = document.getElementById('player2-score');
    let player1Score = 0;
    let player2Score = 0;
    let currentPlayer = 1; // Start with Player 1

    function updateScores() {
        player1ScoreSpan.textContent = player1Score;
        player2ScoreSpan.textContent = player2Score;
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById('player-turn').textContent = `Player ${currentPlayer}'s Turn`;
    }

    const guessInput = document.getElementById('player-guess');
    document.getElementById('guess-button').addEventListener('click', () => {
        // Retrieve the value from the guess input field
        const guessValue = parseInt(guessInput.value, 10);
        // Check if the entered value is a number
        if (!isNaN(guessValue)) {
            if (currentPlayer === 1) {
                player1Score += guessValue;
            } else {
                player2Score += guessValue;
            }
            updateScores();
        } else {
            alert("Please enter a valid number for your guess.");
        }
        switchPlayer(); // Switch player regardless of guessing right or wrong
        guessInput.value = ''; // Clear the input field after guessing
    });

    document.getElementById('pass-button').addEventListener('click', () => {
        switchPlayer();
    });

    // Updated event listener for the 'next-round' button
    document.getElementById('next-round').addEventListener('click', () => {
        // Redirect to the second round page
        window.location.href = 'secondRound.html';
    });

    // Initialize the player turn text
    updateScores(); // Initial score update
    switchPlayer(); // Set to Player 1's turn
});
