script.js

// Add a subtle fade-in effect when the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    container.classList.add("animate__animated", "animate__fadeIn");
});

// Example function to simulate button click animation
const button = document.querySelector(".button");
if (button) {
    button.addEventListener("click", function () {
        button.classList.add("animate__animated", "animate__pulse");
    });
}


