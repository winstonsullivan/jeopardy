document.addEventListener('DOMContentLoaded', () => {
    const betAmount = document.getElementById('bet-amount');
    const finalAnswer = document.getElementById('final-answer');
    const betButton = document.getElementById('bet-button');

    function validateForm() {
        // Enable the bet button only if both fields have values
        betButton.disabled = !betAmount.value || !finalAnswer.value;
    }

    // Event listeners for input fields to validate form on input
    betAmount.addEventListener('input', validateForm);
    finalAnswer.addEventListener('input', validateForm);

    // Optional: Add form submit event handler if needed
    // document.getElementById('betting-form').addEventListener('submit', (event) => {
    //     // Prevent the default form submit action
    //     event.preventDefault();
    //     // Implement the bet logic here
    // });
});
