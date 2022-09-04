// const formData = {
//     name: userName,
//     email: userEmail
// }

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// }

// fetch('http://localhost:3000/dogs', configurationObject)
// .then(function (resp) {
//     return resp.json();
// })
// .then(function (object) {
//     console.log(object)
// })
// .catch(function (object) {
//     alert('Bad things!');
//     console.log(error.message)
// });

function submitData(userName, userEmail) {
    return (fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(object => {
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')
        h1.textContent = object.id
        body.appendChild(h1)
    })
    .catch(error => {
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')
        h1.textContent = error.message
        body.appendChild(h1)
    }))
}

submitData('john', 'john@email.com')
