// Set the date of the hackathon start
const hackathonStartDate = new Date("December 25, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = hackathonStartDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over
    if (distance < 0) {
        countdownElement.innerHTML = "The Hackathon has started!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
