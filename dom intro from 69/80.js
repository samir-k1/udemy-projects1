// function replaceElement(){
//     const firstItem= document.querySelector('li:first-child');
//     const li=document.createElement('li');
//     li.textContent='samir';
// firstItem.replaceWith(li);
// }
// replaceElement();

// function replaceItem2(){
//  const item=document.querySelector('li:nth-child(2)');
//  const li=document.createElement('li')
//  li.textContent=('phones');
// item.replaceWith(li);
// // }
// // replaceItem2();




// // function thirdItem(){
// //     const thirdItem3=document.querySelector("li:nth-child(3)");
// //    const li=document.createElement('li');
// //    li.textContent=('books');
// //       thirdItem3.replaceWith(li);
// // }
// // thirdItem();

// // function replaceAll(){
// // const lis= document.querySelectorAll('li');
// // lis.forEach((item, index) => {


// //     if(index===2){
// //         item.outerHTML='<li>change it man </li>';

// //     }else{
// //         item.outerHTML='<li>replace all</li>';

// //     }
// // });
// // }
// // replaceAll();


// function replaceChildheading(){
//     const header=document.querySelector('header');
//     const h1=document.querySelector('header h1');
//     const h2=document.createElement('h2');

//     h2.id='app-title';
//       h2.textContent=('new shopping list');
//       header.replaceChild(h2,h1);

// }
// replaceChildheading();


// function removeItems(){
//     const ul=document.querySelector('ul');
//     const li=document.querySelector('li:first-child');

// ul.removeChild(li);
// }
//   removeItems();

//   function removeItems2(){
//     const ul=document.querySelector('ul');
//     const li=document.querySelector('li')[1];
//      ul.removeChild(1);
//   }
// //   removeItems2();

//   function removedItemList(removeItem){
//     const li= document.querySelectorAll('li');
//      li[removeItem-2  ].remove();
//   }
//   removedItemList(2);

// const form = document.querySelector('#item-form');
//  function onSubmit(e){
//  e.preventDefault();
//  const item=document.getElementById('item-forms').value;
//  const priority=document.getElementById('priority-input').value;
//  if(item ===''|| priority==='0'){
//   alert('plz fill every field');
//   return;
//  }


// console.log(item, priority.value);

// }

// form.addEventListener('submit',onSubmit)

const button=document.querySelector('btn');
const div=document.querySelector('form div:nth-child(2)');
button.addEventListener('click',()=>{
alert('button was clicked');
});
div.addEventListener('click',()=>{
  alert('button was clicked');
})


