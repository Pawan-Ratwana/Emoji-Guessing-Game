// Array containing emoji details with descriptions and corresponding emojis
const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: '😎' },
    { description: 'Thumbs up', emoji: '👍' },
    { description: 'Heart eyes', emoji: '😍' },
    { description: 'Crying face', emoji: '😥' },
    { description: 'Party popper', emoji: '🎉' }
];

// HTML elements
const descriptionElement = document.getElementById('description');
const guessInput = document.getElementById('guess-input');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Variables to track current emoji index, score, and timer
let currentEmojiIndex = 0;
let score = 0;
let second = 30; // Initial time for timer
let timer; // Timer variable

// Function to display the current emoji and timer
function displayEmoji() {
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent = `Time: ${second}s`;
}

// Function to check user's guess against the correct emoji description
function checkEmoji() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    // Check if guess is correct
    if (guess === correctEmoji) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = "False!";
    }

    // Update score display and reset input field
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = '';
    guessInput.focus();
    nextEmoji(); // Move to next emoji
}

// Function to move to the next emoji
function nextEmoji() {
    currentEmojiIndex++;

    // Clear result message after a delay
    setTimeout(() => {
        resultElement.textContent = '';
    }, 1000);

    // Reset currentEmojiIndex to loop back to the beginning
    if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0;
    }
    displayEmoji(); // Display next emoji
}

// Event listener for Enter key press on input field
guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkEmoji(); // Call checkEmoji() when Enter key is pressed
    }
});

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        second--; // Decrease time by 1 second
        timerElement.textContent = `Time: ${second}s`;
        if (second <= 0) {
            endTimer(); // End timer when time is up
        }
    }, 1000); // Timer ticks every second (1000 milliseconds)
}

// Function to end the timer
function endTimer() {
    clearInterval(timer); // Stop the timer
    guessInput.disabled = true; // Disable input field when time is up
    timerElement.textContent = ''; // Remove timer display
}

// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayEmoji(); // Display first emoji when page loads
    startTimer(); // Start the timer
});
