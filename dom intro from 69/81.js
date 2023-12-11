const text=document.querySelector('p');
const itemList=document.querySelector('.itemlist');
const item=itemList.querySelectorAll('li');

function run(){
    console.log(itemList.className);
    text.className='card dark';
//  console.log(itemList.classList);
//     class list


}
 document.querySelector('button').onclick=run;
