document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let firstName = document.getElementById("firstName").value.trim();
            let lastName = document.getElementById("lastName").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            let terms = document.getElementById("terms").checked;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (!terms) {
                alert("You must accept the terms and conditions!");
                return;
            }

            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Registration successful! Redirecting to login...");
            window.location.href = "index.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let loginEmail = document.getElementById("loginEmail").value.trim();
            let loginPassword = document.getElementById("loginPassword").value;

            let storedEmail = localStorage.getItem("userEmail");
            let storedPassword = localStorage.getItem("userPassword");

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect after login
            } else {
                alert("Invalid email or password!");
            }
        });
    }
});
