// Subscription form submission handler
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const messageElement = document.getElementById("subscription-message");

    // Simple email validation
    if (validateEmail(email)) {
        // Simulate a subscription (In a real app, you'd send the email to the server)
        messageElement.innerHTML = `Thank you for subscribing, ${email}! We'll keep you updated.`;
        messageElement.style.color = "#66ff66"; // Green color for success message

        // Clear the input field after submission
        document.getElementById("email").value = '';

        // Trigger WebPush notification
        triggerWebPushNotification();
    } else {
        messageElement.innerHTML = "Please enter a valid email address.";
        messageElement.style.color = "#ff6666"; // Red color for error message
    }
});

// Simple email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Trigger WebPush notification for new subscription
function triggerWebPushNotification() {
    if (Push.Permission.has()) {
        Push.create("Thanks for Subscribing!", {
            body: "You're now subscribed to our newsletter.",
            icon: "https://avatars.githubusercontent.com/u/177652343?s=200&v=4", // Add your icon URL here
            timeout: 5000,
            onClick: function () {
                window.focus();
            }
        });
    } else {
        Push.Permission.request();
    }
}
