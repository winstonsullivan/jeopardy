document.addEventListener('DOMContentLoaded', () => {
    const betAmount = document.getElementById('bet-amount');
    const finalAnswer = document.getElementById('final-answer');
    const betButton = document.getElementById('bet-button');

    const validateForm = () => {
        betButton.disabled = !betAmount.value.trim() || !finalAnswer.value.trim();
    };

    betAmount.addEventListener('input', validateForm);
    finalAnswer.addEventListener('input', validateForm);

    // Optional: Handle form submission
    // document.getElementById('betting-form').addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     // Betting logic goes here
    // });
});
