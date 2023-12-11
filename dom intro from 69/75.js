
// console.log('samir');
// // // create and append div 

// const div= document.createElement('div');
// div.className=('my-div');
// div.id=('my-div')
//  div.setAttribute('title','my div');
// //  div.innnerText ='helloworld';
//  console.log(div);


//  let text=document.createTextNode('sam');
//  div.appendChild(text);
//  document.body.appendChild(div);
// //   adding in DOM 
// function createListitem(item){

// const li=document.querySelector('li');
// li.innerHTML=`${item}

//         <button class="remove item btn-link text-red">
//            <i class=" fa-solid fa-xmark"></i>

//        </button>`;
//        document.querySelector('.items').appendChild(li);

// }
//  createListitem('eggs');




//  cleaar way to cereta 
 function createNewItem(item){
    const li= document.createElement('ul');
    li.appendChild(document.createTextNode(item));

    const button=document.createElement('button');
    button.className="remove item btn-link text-red";
    const icon=document.createElement('i');
    icon.className="fa-solid fa-xmark";
    button.appendChild(icon);

    li.appendChild(button);

    document.querySelector('.item').appendChild(li);

 }
createNewItem('chipps');

// console.log('samir');

