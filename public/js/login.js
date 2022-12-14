const loginHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#emailVal").value.trim();
    const password = document.querySelector("#passwordVal").value.trim();
    
    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        };
    };
};

const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", loginHandler);