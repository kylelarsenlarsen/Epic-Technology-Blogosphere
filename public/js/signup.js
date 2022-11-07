const signupHandler = async (effect) => {
    effect.preventDefault();
    const username = document.querySelector("#signupName").value.trim();
    const password = document.querySelector("#signupPassword").value.trim();
    const email = document.querySelector("@signupEmail").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
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