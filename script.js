function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.querySelector('.toggle-button');
    body.classList.toggle('dark-mode');
    
    // Change button text depending on mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = "☀️";
    } else {
        toggleButton.innerHTML = "🌙";
    }
}

const form = document.getElementById('contact-form');
const confirmation = document.getElementById('confirmation');
const sending = document.getElementById('sending');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Show "Sending..." message
        sending.style.display = 'block';
        confirmation.style.display = 'none'; // Hide old confirmation just in case

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            sending.style.display = 'none'; // Hide "Sending..." once done
            if (response.ok) {
                confirmation.style.display = 'block'; // Show "Thank you" message
                form.reset(); // Clear the form
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        }).catch(error => {
            sending.style.display = 'none'; // Hide "Sending..." even if error
            alert('Oops! There was a problem submitting your form.');
        });
    });
}
