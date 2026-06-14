// ==========================================
// 1. MOBILE NAVIGATION MENU TOGGLE ENGINE
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

// ==========================================
// 2. AJAX BACKGROUND FORM PROCESSOR ENGINE
// ==========================================
const form = document.getElementById('contactForm');
const statusMsg = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        
        // Visual indicator update
        submitBtn.textContent = 'Sending Message...';
        submitBtn.disabled = true;
        
        const data = new FormData(form);
        
        // Extract the user's name from the form input, fallback to 'Guest' if empty
        const userName = data.get('name') || 'Guest'; 
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                // SUCCESS SCENARIO: Hide the form completely
                form.style.display = 'none';
                
                // Inject the exact HTML structure matching your design screenshot
                statusMsg.innerHTML = `
                    <div class="success-screen">
                        <div class="success-icon-box">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <h2 class="success-heading">Message Sent Successfully!</h2>
                        <p class="success-text">Thank you, <strong>${userName}</strong>. The team at KalashDevv Studio has received your message and will review it immediately.</p>
                    </div>
                `;
                
                // Remove the old simple alert classes and display the new block
                statusMsg.className = ""; 
                statusMsg.style.display = "block";
                
                form.reset(); 
            } else {
                // Server Side Error Handlers
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    statusMsg.textContent = responseData.errors.map(error => error.message).join(", ");
                } else {
                    statusMsg.textContent = "Oops! There was a problem submitting your form.";
                }
                statusMsg.className = "form-status-msg error";
                statusMsg.style.display = "block";
            }
        } catch (error) {
            // Network Failure Fallback
            statusMsg.textContent = "Oops! There was a network connection error. Try again.";
            statusMsg.className = "form-status-msg error";
            statusMsg.style.display = "block";
        } finally {
            // Only restore the button if the form is still visible (meaning it failed)
            if(form.style.display !== 'none') {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }
        }
    });
}