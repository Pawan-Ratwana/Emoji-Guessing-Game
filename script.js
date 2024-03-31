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

// Variables to track current emoji index and score
let currentEmojiIndex = 0;
let score = 0;

// Function to display the current emoji
function displayEmoji() {
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
}

// Function to check user's guess against the correct emoji description
function checkEmoji() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    // Check if guess is correct
    if (guess === correctEmoji) {
        resultElement.textContent = 'Correct!';
        score++; // Increment score if correct
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
    if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0; // Loop back to the first emoji
    }
    displayEmoji(); // Display next emoji
}

// Event listener for Enter key press on input field
guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkEmoji(); // Call checkEmoji() when Enter key is pressed
    }
});

// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayEmoji(); // Display first emoji when page loads
});
