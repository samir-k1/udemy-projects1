let output ;

//get child element 

const parent =document.querySelector('.parent');

output=parent.children;
 output=parent.children[1].innerText;
 output=parent.children[1].className;
 output=parent.children[2].innerText;
 output=parent.children[2].nodeName;


//  parent.children[1].innerText='samir';
// parent.children[1].style.color='red'; 
// parent.firstElementChild.innerText='';


parent.lastElementChild.innerText='childeren 3';
 console.log(output);



 const child=document.querySelector('.child');
 output=child.parentElement;
 child.parentElement.style.padding=('20px');
 child.parentElement.style.border=('1px solid #ccc');

 const parent1=document.querySelector('.parent');
 output=parent.childNodes;
 output=parent.childNodes[4].textContent;
 output=parent.childNodes[3].innerHTML  ;
 output=parent.childNodes[3].innerText='child one';

 parent.lastChild.textContent='hello';
 console .log(output);
//   create and append   
