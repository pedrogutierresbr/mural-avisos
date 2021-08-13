document.addEventListener("DOMContentLoaded", () => updatePosts());

async function updatePosts() {
    const { data } = await axios.get("http://localhost:3005/api/all");

    let postElements = "";

    let posts = data;
    posts.forEach((post) => {
        let postElement = `<div class="card mb-4" id=${post.id}>
        <div class="card-header">
            <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
            <div class="card-text">${post.description}</div>
        </div>
    </div>`;
        postElements += postElement;
    });
    document.getElementById("posts").innerHTML = postElements;
}

function newPost() {
    console.log("New post");
}

function deletePost() {}
