let btn = document.getElementById('show');
let usererror = document.getElementById("Username_error")
let email_error = document.getElementById("Email_error")
let password_error = document.getElementById("password_error");
btn.addEventListener('click', () => {
    let inp = document.getElementById('signupPassword')
    if (inp.type === 'password') {
        inp.type = "text";
        btn.textContent = 'Hide'
    }
    else {
        inp.type = 'password'
        btn.textContent = "Show"
    }
})
const signupSection = document.getElementById("signupSection");
    document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;

    const nameRegex = /[A-Za-z]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9.]+@[a-z]+\.[a-z]{2,}$/;
    const passwordRegex =  /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[@!#$%^&*()_+=><,.?/-]){1,})[a-zA-z0-9@!#$%^&*()_+=><,.?/-]{8,}$/

    if (!nameRegex.test(name)) {
        usererror.textContent="Name must have only uppercase and lower case letters and min 3 characters."
        return;
    }
    else
    {
        usererror.textContent=""
    }
    if (!emailRegex.test(email)) {
        email_error.textContent="Invalid email format."
        return;
    }
    else
    {
        email_error.textContent=""
    }
    if (!passwordRegex.test(password)) {
        password_error.textContent="Password must have uppercase, lowercase, a number, a symbol, and be at least 8 characters long.";
        return;
    }
    else
    {
        password.textContent=""
    }
    alert("Sign-up successful! Please login.");
    let users = JSON.parse(localStorage.getItem("Login")) || []
    users.push({ name, email, password });
    localStorage.setItem("Login",JSON.stringify(users))
    location.href="../login/login.html"
});