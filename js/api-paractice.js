function newUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => takeData(data))
}

function takeData(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}`;
        ul.appendChild(li);
    }
}