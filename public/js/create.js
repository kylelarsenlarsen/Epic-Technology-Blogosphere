const createPost = document.querySelector("#createPost");
const postForm = document.querySelector("#postForm");

function showPost() {
    postForm.classList.remove("hide");
    createPost.classList.add("hide");
};

async function newPost(event) {
    event.preventDefault();

    const content = document.querySelector("#postContent").value;
    const title = document.querySelector("#postTitle").value;
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: content,
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
createPost.addEventListener("click", showPost);