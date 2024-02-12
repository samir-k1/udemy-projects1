function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // 'post' changed to 'POST'
        body: JSON.stringify({
            title,
            body
        }),
        headers: { // 'Headers' changed to 'headers'
            'Content-Type': 'application/json', // 'applications/json' corrected to 'application/json'
            'token': 'avc123;' // This line added to set a token header (replace with your actual token)
        }
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}

createPost({title: 'film',body:'my name is khan'})
// createPost({ title: 'film', body: 'my name is khan' })function createPost({title,body}) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {// Corrected URL for example, replace with your actual API endpoint
//         method:'post',
//         body:JSON.stringify({
//             title,
//             body
//         }),
//         Headers:{
//             'Content-Type':'applications/json',
//         token :'avc123;'
//         }
//     }).then((response)=>response.json())
//     .then((data)=>console.log(data));
        
// }

