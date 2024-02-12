function getData(endpoint){
return new Promises((reject,resolve)=>{

const xhr= new XMLHttpRequest();
xhr.open('GET', endpoint)

xhr.onreadystatechange= function (){
    if(this.readyState=== 4 ){
     if(this.status=== 200){
        // console.log(JSON.parse(this.responseText));
        resolve(JSON.parse(this.responseText));
    }
    else{
        reject('something went wrong')
    }
}
};
setTimeout(() => {
    xhr.send();
}, Math.floor(Math.random()*3000)+1000);
});
}


// getData('./actor.json').then((movies)=>{
//     console.log(actors);
// });

async function getAllData(){
    const actor=await getData('./actor.json');
    const director=await getData('./director.json');

    console.log(actor)
    console.log(director)

}
getAllData();






// xhr.onreadystatechange= function (){
//     if(this.readyState=== 4 && this.status=== 200){
//         // console.log(JSON.parse(this.responseText));
//         const data =JSON.parse(this.responseText);

//         data.forEach((repo) =>
//         {

//             const li=document.createElement('li');
//         li.innerHTML=`<strong>${repo.name}</strong>-${repo.description}`;

//         document.querySelector('#results').appendChild(li);
//         });
//     }
// };
// }

// xhr.send();

// document.addEventListener('click',onClick);