const post = document.querySelector(".post");

fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => response.json())
          .then(posts => showUsers(posts));

function showUsers(data) {
    let users = data.map(({userId, id, title, body}) => {
        post.innerHTML += `
        <div class="posts">
            <p>User id: ${userId}</p>
            <p>Id: ${id}</p>
            <p>${title}
               ${body}</p>
        </div>
        `;
    });
};