const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    // const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!fullname || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Fake success for demo
    alert("Registration successful Redirecting to login...");
    window.location.href = "login.html";
});
