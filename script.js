// ==========================================
// FEATURE 1: DARK/LIGHT THEME TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    // Toggle the class ".dark-theme" on the body element
    document.body.classList.toggle('dark-theme');

    // Dynamically change the icon inside the button based on the active theme
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️'; // Show sun icon in dark mode
    } else {
        themeToggleBtn.textContent = '🌙'; // Show moon icon in light mode
    }
});


// ==========================================
// FEATURE 2: CONTACT FORM INTERCEPTOR
// ==========================================
const contactForm = document.querySelector('.contact form');
const contactSection = document.querySelector('.contact');

function showSuccessScreen(userName) {
    contactSection.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 40px 20px; animation: fadeIn 0.5s ease-in-out;">
            <div class="success-icon" style="font-size: 50px; margin-bottom: 20px;">✅</div>
            <h2 style="margin-bottom: 15px; color: #70c797;">Message Sent Successfully!</h2>
            <p style="color: #9ca3af; font-size: 18px; max-width: 400px; margin: 0 auto; line-height: 1.6;">
                Thank you, <strong>${userName}</strong>. The team at KalashDevv Studio will review your request and get back to you within 24 hours.
            </p>
        </div>
    `;
}

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameInput = document.querySelector('input[placeholder="Your Name"]').value;
    const messageInput = document.querySelector('textarea').value;

    if (messageInput.length < 10) {
        alert("❌ Error: Your message must be at least 10 characters long.");
    } else {
        showSuccessScreen(nameInput);
    }
});