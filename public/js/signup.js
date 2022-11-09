const signupHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#signupName").value.trim();
    const password = document.querySelector("#signupPassword").value.trim();
    const email = document.querySelector("#signupEmail").value.trim();

    if (name && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Sign up failed.");
        };
    };
};

const signupButton = document.getElementById("signupBtn");
signupButton.addEventListener("click", signupHandler);