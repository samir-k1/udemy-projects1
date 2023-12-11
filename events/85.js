// console.log('1');


const inputItems=document.getElementById('item-form');
// console.log('1')

function  onKeyPress(){
    console.log('1');
}
const onkeyUp=()=>{
    console.log('onkeyUp');

}

    // console.log('onkeyPress');
const changeHead=document.querySelector('h1');
h1.innerText=e.key;

inputItems.addEventListener('onClick',onKeyPress);
inputItems.addEventListener('onclick',onkeyUp);
