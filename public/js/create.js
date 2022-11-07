function showPostCreation() {
    const createPost = document.querySelector("#createPost");
    const postForm = document.querySelector("#postForm");
    postForm.classList.remove("hide");
    createPost.classList.add("hide");
};

async function newPost(effect) {
    effect.preventDefault();

    const content = document.querySelector("#postTitle").value;
    const title = document.querySelector("#postContent").value;
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            content: content,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        postForm.classList.add("hide");
        createPost.classList.remove("hide");
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    };
};

document.querySelector(".newPostForm").addEventListener("submit", newPost);
createPost.addEventListener("click", showPostCreation);