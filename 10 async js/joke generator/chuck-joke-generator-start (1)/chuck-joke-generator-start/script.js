const xhr= new XMLHttpRequest();
xhr.open('GET','https://api.github.com/users/samir-k1/repos')
// 5 stages of ready  state 
//00 : request not initialized
//01 : server  connection established 
//02 : request recieved
//03 : processing request 
//04 : request finished and responnse is ready 
xhr.onreadystatechange=function (){
    if(this.readyState=== 4 && this.status=== 200){
        // console.log(JSON.parse(this.responseText));
        const data =JSON.parse(this.responseText);

        data.forEach((repo) =>
        {

            const li=document.createElement('li');
        li.innerHTML=`<strong>${repo.name}</strong>-${repo.description}`;

        document.querySelector('#results').appendChild(li);
        });
    }
};

xhr.send();