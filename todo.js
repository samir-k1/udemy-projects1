let x;
 const todo=new Object();
//  todo.id=1;
//  todo.name='Buy Milk';
//  todo.completed=false;
// const todo=new todo();
 /*todo.id =1;
 todo.name='workout';
 todo.completed=true;

  x=todo;
  console.log(x);


 const person={
    address:{
        coords:{
            lat:45.877,
            lng:-78.655,
        }
    }
 }
 x=person.address.coords.lat;
 x=person.address.coords.lng;*/


 const obj1={a:1,b:3};
 const obj2={a:2,b:9};
 const obj3={ ...obj1 , ...obj2};
const obj4= Object.assign({},obj1,obj2);
 const todos=[
    {id:1, name: 'Buy Milk'},
    {id:2, name: 'Pickup kids from school'},
    {id:3, name: 'Take out trash'},
 ];

/*x= todos[0].name;
x=Object.keys(todo);
x=Object.keys(todo).length;
// x=Object.values(todos);
// x=Object.entries(todos);
console.log(x);


const firstName='samir';
const lastName='Khan';
const age=21;
 

const person={
   firstName,
    lastName,
   age: age,
}
x=person;
console.log(person.age);

const todo1={

    id:1,
    title:'take out trash',
    user:{
        name:'john',
    },
    
};



const  {
    id: todoId,
    title,
    user:{name},
}=todo;
console.log(todoId);

//destuctuve arrays 
const numbers=[23,45,28,49];
const  [first,second,...rest]=numbers;
console.log(first,second,rest);*/

const post={
    id:1,
    title:'Post One',
    body:'this is the body'
};
console.log(post);
const str = JSON.stringify(post);
const obj=JSON.parse(str);
console.log(obj.id);

 



 



