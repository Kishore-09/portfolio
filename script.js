// Display an alert when the "Say Hello!" button is clicked
document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.getElementById("greet-btn");
    if (greetButton) {
        greetButton.addEventListener("click", () => {
            alert("Thanks for visiting my portfolio!");
        });
    }
});
