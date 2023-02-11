const containerElement = document.getElementById("container");

const get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "json";

        xhr.send();

        xhr.onload = () => {
            const { status, response } = xhr;
            if (status === 200) {
                resolve(response);
            } else {
                reject({
                    status,
                })
            }
        }

        xhr.onerror = () => {
            reject({});
        }
    })
}

const handleClick = (event) => {
    const buttonElement = event.target
    const buttonParent = buttonElement.parentElement;
    const postId = buttonParent.getAttribute("id");
    const commentsContainer = buttonParent.querySelector("div")

    if (buttonElement.innerText === "Show comments") {
        get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            const commentElementsArr = [];

            response.forEach(comment => {
                const commentElement = document.createElement("p");

                commentElement.classList.add("comment");
                commentElement.innerText = comment.body;

                commentElementsArr.push(commentElement);
            })

            commentsContainer.append(...commentElementsArr);
            buttonElement.innerText = "Hide comments";
        })
    } else {
        commentsContainer.innerHTML = ""
        buttonElement.innerText = "Show comments";
    }

    
}

const renderPost = (post) => {
    const postContainer = document.createElement("div");
    const postTitle = document.createElement("h2");
    const postBody = document.createElement("p");
    const postCommentsContainer = document.createElement("div");
    const postButton = document.createElement("button");

    postContainer.setAttribute("id", post.id.toString());

    postTitle.innerHTML = post.title;
    postBody.innerHTML = post.body;

    postButton.innerText = "Show comments";
    postButton.addEventListener("click", handleClick);

    postContainer.append(postTitle, postBody, postCommentsContainer, postButton);
    postContainer.classList.add("post");

    containerElement.append(postContainer);
}

const renderPosts = () => {
    get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            response.forEach(post => {
                renderPost(post);
            });
        })
}

renderPosts();