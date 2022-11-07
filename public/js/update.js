function updatePostHandler() {
    const myModal = document.querySelector(".modalBtn");
    myModal.classList.remove("hide");
};

function hideModal() {
    const myModal = document.querySelector(".modalBtn");
    myModal.classList.add('hide');
    document.location.replace("/dashboard");
};

async function updatePost(effect) {
    effect.preventDefault();
    const id = document.querySelector("#PostID").value;
    const title = document.querySelector("#updateTitle").value;
    const content = document.querySelector("#updateContent").value;
    const response = await fetch("/api/posts", {
        method: "PUT",
        body: JSON.stringify({
            title: title,
            content: content,
            id: id,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    };
};

document.querySelector("#modalUpdate").addEventListener("click", hideModal);
document.querySelector("#modalUpdate").addEventListener("click", updatePost);
document.querySelector(".updatePost").addEventListener("click", updatePostHandler);