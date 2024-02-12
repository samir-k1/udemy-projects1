// setTimeout(changeText,2000);
// function changeText(){
//     document.querySelector('h1').textContent=' hello from call back';
// }

function changeText(e){
    document.querySelector('h1').textContent="hello mr khan";
}
const timerId=setTimeout(changeText,2000)

document.querySelector('#cancel').addEventListener('click',()=>{
    console.log(timerId);
    clearTimeout(timerId);
    console.log('timer Cancelled');
})

