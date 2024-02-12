const jokeEL=document.getElementById('joke');
const jokeBtn=document.getElementById('joke-btn');



const generateJoke=()=>{
const xhr= new XMLHttpRequest();
xhr.open('GET','https://api.chucknorris.io/jokes/random')
// 5 stages of ready  state 
//00 : request not initialized
//01 : server  connection established 
//02 : request recieved
//03 : processing request 
//04 : request finished and responnse is ready 



xhr.onreadystatechange= function (){
    if(this.readyState=== 4 ){

    if( this.status=== 200){
        //  console.log(JSON.parse(this.responseText));
        jokeEL.innerHTML =JSON.parse(this.responseText).value;
    }
    else{
        jokeEL.innerHTML='not funny'
    }
        // data.forEach((repo) =>
        //  {

        //     const li=document.createElement('li');
        // li.innerHTML=`<strong>${repo.name}</strong>-${repo.description}`;

        // document.querySelector('#joke-btn').appendChild(li);
        // });
    }
};


xhr.send();
};
jokeBtn.addEventListener('click',generateJoke);