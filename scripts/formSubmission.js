document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = document.querySelector('.submit-btn');
    submitButton.innerHTML = 'Sending &nbsp;&nbsp;&nbsp; <div class="loader"></div>';
    submitButton.disabled = true;

    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('https://webhook.site/247aee67-d2ed-4457-af8a-cd6f92a38cdb', {
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
        alert('Your message has been submitted successfully!');
        submitButton.innerHTML = 'Submit <i class="fa-regular fa-paper-plane" style="margin-left: 1rem;"></i>';
        submitButton.disabled = false;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit your message. Please try again.');
        submitButton.innerHTML = 'Submit <i class="fa-regular fa-paper-plane" style="margin-left: 1rem;"></i>';
        submitButton.disabled = false;
    });
});