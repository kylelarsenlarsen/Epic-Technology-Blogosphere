function showCommentCreation() {
    const createComment = document.querySelector("#createComment");
    const commentForm = document.querySelector("#commentForm");
    commentForm.classList.remove("hide");
    createComment.classList.add("hide");
};

async function newComment(effect) {
    effect.preventDefault();

    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const comment = document.querySelector("#commentComment").ariaValueMax;
    const response = await fetch("/api/comment", {
        method: 'POST',
        body: JSON.stringify({
            comment: comment,
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
createComment.addEventListener("click", showCommentCreation);