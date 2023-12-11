const itemInput=document.getElementById('item-form');
const heading=document.getElementById('app-title');

function onInput(e){
    heading.textContent=e.target.value;
}


function onChecked(e){
    const isChecked=e.target.checked;
    heading.textContent=isChecked?'checked':'Not checked';
}

function onFocus(){
    console.log("it is focus ");
    itemInput.style.outlineStyle="solid blue";
    itemInput.style.outlineWidth='2px';
    itemInput.style.outlineColor='red';


}
function onBlur(){
    console.log("it is blur")

}
// itemInput.addEventListener('input',onInput);
// itemInput.addEventListener('input',onFocus);
// itemInput.addEventListener('input',onBlur);


// checkbox.addEventListener('input',onChecked);

const  listItem=document.querySelectorAll('li');
 const list=document.querySelector('ul')
// listItem.forEach((item)=>{

//     item.addEventListener('click',(e)=>{
//         e.target.remove;
//     });
// });
list.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.style.color='red';
  }
});