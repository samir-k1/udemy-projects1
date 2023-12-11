window.addEventListener('load',()=>{
    console.log('page load ');
});
window.addEventListener('DOMContentLoaded',()=>{
    console.log('load DOM')
});
window.addEventListener('resize',()=>{
    document.querySelector('h1').innerText=`resize to ${window.innerWidth}x${window.innerHeight}`;

})
window.addEventListener('scroll',()=>{
console.log(`scrolled:${window.scrollX}x${window.scrollY}`);
if(window.scrollY>100){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';

}
else{
    document.body.style.backgroundColor='red';
    document.body.style.color='black';



}
});

window.addEventListener('focus',()=>{
    document.querySelectorAll('p').forEAch((p)=> {
    // p.style.backgroundColor='white';
    p.style.color='blue';
    });

})
window.addEventListener('blur',()=>{
    document.querySelectorAll('p').forEAch((p)=> {
    // p.style.backgroundColor='white';
    p.style.color='blue';
    });

})