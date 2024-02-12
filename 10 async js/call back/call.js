function toggle(e){
e.target.classList.toggle('danger');
console.log(1) 
}


document.querySelector('button').addEventListener('click',toggle);

const posts=[
    {post:'one',body:' let see the post one'},
    {post:'two',body:' let see the post two'},
]



function createPost(post,cb){
    setTimeout(()=>{
        posts.push(posts);
        cb();
    },2000);
    
}




function getpost(){

setTimeout(() => {
posts.forEach(function(post){
    const div=document.createElement('div');
    div.innerHTML=`<strong>${post.title}</strong>-${post.body}`;
    document.querySelector('#posts').appendChild(div);
});
},1000);
}

createPost({title:'post three',body: 'this is post three'});

getpost();

