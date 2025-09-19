const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Fake login for demo
    if (username === "admin" && password === "1234") {
        alert("Login successful! Redirecting...");
        window.location.href = "index.html"; // redirect to homepage
    } else {
        alert("Invalid username or password ");
    }
});
