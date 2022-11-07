async function deletionHandler(effect) {
    effect.preventDefault();
    const id = effect.target.dataset.id;
    const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    };
};

const deleteButton = document.getElementsByClassName("deleteBtn");

for (let i = 0; i < deleteButton.length; i++) {
    const element = deleteButton[i];
    element.addEventListener("click", deletionHandler);
};