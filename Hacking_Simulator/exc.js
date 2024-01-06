async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to simulate the hacking process
async function simulateHacking() {
    const messages = [
        "Reading your files<span class='blink'>...</span>",
        "Password Files detected<span class='blink'>...</span>",
        "Sending all passwords and personal files to server<span class='blink'>...</span>",
        "Cleaning up<span class='blink'>...</span>"
    ];

    const terminal = document.getElementById('terminal');

    // Loop through each hacking message
    for (let i = 0; i < messages.length; i++) {
        // Display the current message in the terminal
        terminal.innerHTML += messages[i] + '<br>';

        // Introduce a random delay between 1 and 7 seconds
        await sleep(Math.floor(Math.random() * 7000) + 1000);
    }
}

// Start the hacking simulation when the page loads
simulateHacking();