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