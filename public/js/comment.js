const createComment = document.querySelector("#comment");

function showComment() {
    
    const commentForm = document.querySelector("#commentForm");
    commentForm.classList.remove("hide");
    createComment.classList.add("hide");
};
console.log(createComment);
async function newComment(event) {
    event.preventDefault();

    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const comment = document.querySelector("#commentComment").value;
    const response = await fetch("/api/comment", {
        method: 'POST',
        body: JSON.stringify({
            body: comment,
            post_id: post_id,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        commentForm.classList.add("hide");
        createComment.classList.remove("hide");
        document.location.replace("/post/" + post_id);
    } else {
        alert(response.statusText);
    };
};

document.querySelector(".newCommentForm").addEventListener("submit", newComment);
createComment.addEventListener("click", showComment);