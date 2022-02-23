function takePost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => giveData(data))
}

function giveData(posts) {
    const postContainer = document.getElementById('post')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('posts')
        div.innerHTML =`
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}