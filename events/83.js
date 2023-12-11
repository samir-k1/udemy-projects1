console.log(1);
const clearBtn=document.querySelector('#clear')
// function onclear(){
//     alert('')

// }
//  java script event listener 
// clearBtn.onclick=function(){
//     alert('clear item');
// }



///adding event listener


function onclear(){
    const clearall=document.querySelector('ul');
    clearall.innerHTML='';

}
clearBtn.addEventListener('click' ,onclear);

const logo=document.querySelector('#img');
const onclick=()=>console.log('click event');
const ondoubleClick=()=>{
if(document.body.style.backgroundColor!='purple'){
    document.body.style.backgroundColor='purple';
    document.body.style.Color='white';
}else{
    document.body.style.backgroundColor='white';
    document.body.style.Color='black';

}
}
// const mouseDown=document.querySelector('#img');
// const onMouseDown=()=>{
//     console.log('show mouse down')
// }


const onRightClick=()=>{
console.log('right click event');
}
const onMouseUp=()=>{'mouse Down event'}

const onMouseDown=()=>{'mouse Down event'}
const onMouseWheel=()=>{'mouse Down event'}
const onDragStart=()=>{' drag start event'}






//  

// const logo1=document.querySelector('#img')
// function onClick(e){
//     console.log(e.target);
//     console.log(e.target);
//     console.log(1)
// }
// logo1 .addEventListener('click',onClick);



