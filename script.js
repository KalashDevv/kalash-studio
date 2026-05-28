// ==========================================
// FEATURE 1: DARK/LIGHT THEME TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️'; 
    } else {
        themeToggleBtn.textContent = '🌙'; 
    }
});


// ==========================================
// FEATURE 2: LIVE CONTACT FORM WITH BACKEND API
// ==========================================
const contactForm = document.querySelector('.contact form');
const contactSection = document.querySelector('.contact');

function showSuccessScreen(userName) {
    contactSection.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 40px 20px; animation: fadeIn 0.5s ease-in-out;">
            <div class="success-icon" style="font-size: 50px; margin-bottom: 20px;">✅</div>
            <h2 style="margin-bottom: 15px; color: #70c797;">Message Sent Successfully!</h2>
            <p style="color: #9ca3af; font-size: 18px; max-width: 400px; margin: 0 auto; line-height: 1.6;">
                Thank you, <strong>${userName}</strong>. The team at KalashDevv Studio has received your message and will review it immediately.
            </p>
        </div>
    `;
}

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default page refresh

    // 1. Grab input values
    const nameInput = document.querySelector('input[placeholder="Your Name"]').value;
    const emailInput = document.querySelector('input[type="email"]').value;
    const messageInput = document.querySelector('textarea').value;
    const submitBtn = document.querySelector('.btn-submit');

    // 2. Frontend Validation Check
    if (messageInput.length < 10) {
        alert("❌ Error: Your message must be at least 10 characters long.");
    } else {
        // 3. Visual Feedback (Let the user know it's processing)
        submitBtn.textContent = "Sending...";
        submitBtn.style.opacity = "0.7";
        submitBtn.style.pointerEvents = "none";

        // 4. Package data for the Formspree API
        const formData = {
            name: nameInput,
            email: emailInput,
            message: messageInput
        };

        // 5. Fire data to your Formspree Endpoint
        fetch("https://formspree.io/f/maqkvqve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // If backend accepts the letter, transform the UI!
                showSuccessScreen(nameInput);
            } else {
                alert("❌ Oops! There was a problem submitting your form.");
                submitBtn.textContent = "Send Message";
                submitBtn.style.opacity = "1";
                submitBtn.style.pointerEvents = "auto";
            }
        })
        .catch(error => {
            alert("❌ Network error. Please check your internet connection.");
            submitBtn.textContent = "Send Message";
            submitBtn.style.opacity = "1";
            submitBtn.style.pointerEvents = "auto";
        });
    }
});