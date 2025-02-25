let btn = document.getElementById('show');
btn.addEventListener('click', () => {
    let inp = document.getElementById('loginPassword')
    if (inp.type === 'password') {
        inp.type = "text";
        btn.textContent = 'Hide'
    }
    else {
        inp.type = 'password'
        btn.textContent = "Show"
    }
})
document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
    
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        let users =JSON.parse(localStorage.getItem("Login")) || []
        const loggedInUser = users.find((user) =>  user.email == email && user.password == password);
    
        if (loggedInUser) {
            alert(`Welcome, ${loggedInUser.name}!`);
            alert("You need to accept the Terms and Conditions to play the game.");
            let users = JSON.parse(localStorage.getItem("Login")) || [];
            for(i=0;i<users.length;i++)
                if(users[i].email == email)
                    users[i].isLoggedIn = true;
            localStorage.setItem("Login",JSON.stringify(users))
            window.location.href="../home/game.html"
        } else {
            document.getElementById("credential_err").textContent="Sorry, your Credentials was incorrect. Please double-check your Credentials."
        }
    });