console.log(1)

const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post one',body:'this is post one'},
];

function createPost(post){
    return new promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            
        
        posts.push(post);
        resolve;
        }
        else{
            reject('went wrong');
        }
    } ,2000);
});
}

function showError(error){
    const h3=document.createElement('h3');
    h3.innerHTML=`<strong>${error}</strong>`;
    document.getElementsById('posts').appendChild(h3);
}
function getPosts(){
    setTimeout(() => {
        posts.forEach(function(post){
            const div=document.createElement('div');
            div.innerHTML=`<strong>${post.title}</strong>-${post.body}`;
            document.querySelector(`#posts`).appendChild(div);
        });
    }, 1000);
}
createPost({ title:'post three',body:'this  is post'})
.then(getPosts)
.catch(showError);