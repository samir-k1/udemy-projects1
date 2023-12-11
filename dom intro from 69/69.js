// // // console.log(document);
// // // console.log(document.lin k);

// // // title.textContent='hrllo';
// // //  console.log(window.document);
// // //  console.dir(window.document);
// // //   console.log(document.body);
// // //   console.log(document.body.innerText);
// // //    console.log(document.links);
// // //  document.body.innerHTML='<h1>hello world</h1>';
// // // //  document.write('hello from JS');

// // // console.log(document.getElementById('main'));
// // // const main=document.getElementById('main');
// // // main.innerHTML='<h1>hello man</h1>';

// // let output;
// // output=document.all;

// // output=document.all[11];
// // console.log(output);
// // // document.getElementById('app-title').title='shopping '.className;
// // const title=document.getElementById('app-title');
// //  console.log(title);
// // // console.log(title.textContent);
// //  title.textContent='hello samir ';
// //  title.innerHTML='<strong>shopping List </strong>';

// // //  chnage style
// // title.style.color='red';
// // title.style.backgroundColor='black';
// // // document.querySelector()
// // console.log(document.querySelector('h1'));
// // console.log(document.querySelector('#app-title'));
// // // console.log(querySelector('.container'));
// // // console.log(querySelector('input[type="text"]'));

// // const secondItem=document.querySelector('li:nth-child(2)');
// // secondItem.innerText='mango';
// // secondItem.style.color='red';
// // // use these method on other elements
// // const list=document.querySelector('ul');
// // // console.log(list);
// // // const list1=list.querySelector('li');
// // // console.log(list);

// // const listItems= document.querySelectorAll('.item');
// // console.log(listItems[1].innerText);

// // // listItems[1].style.color='red';

// // // listItems.forEach((item,index)=>{
// // //     item.style.color='red';

// // // if(index===1){
// // //     item.remove();
// // // }
// // // if(index===0){
// // //     item.innerText='mango';
// // // }
// // // });

// // const listItems1=document.getElementsByClassName('items');

// // console.log(listItems1[1].innerText);

// // const listItemArray=Array.from(listItem2);

// // listItemsArray.forEach((items)=>{
// //     console.log(items.innerText);

// // });

// function insertElement(){
//     const filt =document.querySelector('.filter');
//      const h1=document.createElement('h1');
//      h1.textContent='heh boi';
//      filt.insertAdjacentElement('beforebegin',h1);
// }
//  insertElement();

// function insertList(){
//     const items =document.querySelector('li:first-child');
//     items.textContent='sexy man';

//     items.insertAdjacentElement('afterend',items)
// }


//  insertList();

//  insert before
// function insertBeforeItem(){

//     const ul=document.querySelector('ul');

//     const li=document.createElement('li');
//      li.textContent='insertBefore';
//     const thirdElement=document.querySelector('li:nth-child(3)') 
//      ul.insertBefore(li,thirdElement)
// }
// insertBeforeItem ();

function insertAfter(newEl,existEl){
    console.log(existEl.parentNode);
    }
const li=document.querySelector('li');
li.textContent='berries';

const firstItem= document.querySelector('li:first-child');

insertAfter(li,firstItem);