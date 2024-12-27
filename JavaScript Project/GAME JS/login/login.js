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
            alert("Invalid login credentials.");
        }
    });