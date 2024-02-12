// //  const intervalID=setInterval(myCallBback,1000,"hello");

// function myCallBback(a){
//     //  console.log(a, Date.now());

// }

let intervalID ;

function  startChange(){
    if(! intervalID){
        intervalID=setInterval(changeRandomColor,3000);
    }
    }

    // function changeColor(){
    //   if(document.body.style.backgroundColor !=='black') {
    //     document.body.style.backgroundColor ='black';
    //     document.body.style.color ='white'
    //   } 
    //   else{
    //     document.body.style.backgroundColor ='white';
    //     document.body.style.color ='black'
    //   }
    // }


function changeRandomColor(){
    const randomColor=Math.floor(Math.random() *16777215).toString(16);
    document.body.style.backgroundColor =`#${randomColor}`;
}  



function stopChange(){
    clearInterval(intervalID);
}
document.getElementById('start').addEventListener('click',startChange);
document.getElementById('stop').addEventListener('click',stopChange);