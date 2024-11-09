document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const emailInput = document.querySelector(".email").value; 
    const passwordInput = document.querySelector(".password").value; 
    
    const correctEmail = "username@login.com";
    const correctPassword = "password123";
    
    const message = document.querySelector("#message");

    // Validate email and password
    if (emailInput === correctEmail && passwordInput === correctPassword) {
    
        window.location.href = "success.html";
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect email or password."; 
    }
});