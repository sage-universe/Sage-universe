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
// Handle the subscription form submission
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    // Get the email input
    const email = document.getElementById('email').value;
    
    // Here you would send the email to your server to store it, but we will continue with WebPushR.

    // Show a message confirming the subscription
    document.getElementById('subscription-message').innerText = "Thank you for subscribing! You will receive notifications soon.";

    // Request permission for push notifications
    Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
            // User has granted permission, subscribe them to WebPushR
            webpushr('subscribe', {
                email: email  // You can also store the email here for sending targeted notifications
            });

            // Optionally: Trigger a confirmation notification
            Push.create("Thank you for subscribing!", {
                body: "You will now receive updates about Winter Sage Hackathon.",
                icon: "/path/to/icon.png",
                timeout: 5000, // Show notification for 5 seconds
            });
        } else {
            // User did not grant permission for notifications
            alert("You have denied push notifications. You will not receive future updates.");
        }
    });
});
