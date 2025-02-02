document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = document.querySelector('.submit-btn');
    submitButton.innerHTML = 'Sending &nbsp;&nbsp;&nbsp; <div class="loader"></div>';
    submitButton.disabled = true;

    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('https://madhavportfoliobackend.onrender.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayPopup("Your message has been sent successfully. We'll get back to you soon!");
    
        submitButton.innerHTML = 'Submit <i class="fa-regular fa-paper-plane" style="margin-left: 1rem;"></i>';
        submitButton.disabled = false;
    })
    .catch(error => {
        console.error('Error:', error);
        displayPopup('Failed to submit your message. Please try again.');

        submitButton.innerHTML = 'Submit <i class="fa-regular fa-paper-plane" style="margin-left: 1rem;"></i>';
        submitButton.disabled = false;
    });
});

function displayPopup(message) {
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').style.display = 'flex';
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none';
    }, 3000);
}