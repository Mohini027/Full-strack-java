const signupSection = document.getElementById("signupSection");
    document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const nameRegex = /[A-Za-z]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9.]+@[a-z]+\.[a-z]{2,}$/;
    const passwordRegex =  /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[@!#$%^&*()_+=><,.?/-]){1,})[a-zA-z0-9@!#$%^&*()_+=><,.?/-]{8,}$/

    if (!nameRegex.test(name)) {
        alert("Name must have only uppercase and lower case letters and min 3 characters.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must have uppercase, lowercase, a number, a symbol, and be at least 8 characters long.");
        return;
    }
    alert("Sign-up successful! Please login.");
    let users = JSON.parse(localStorage.getItem("Login")) || []
    users.push({ name, email, password });
    localStorage.setItem("Login",JSON.stringify(users))
    location.href="../login/login.html"
});