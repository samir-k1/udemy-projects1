const apiUrl='https://jsonplaceholder.typicode.com/todos';

const getTodos=()=>{
    fetch(apiUrl+'?_limit=5')
    .then((resp)=>resp.json())
    .then((data)=>{
     
       data.forEach((todo)=>addTodoToDom(todo));
     
    })
    }

const addTodoToDom=(todo)=>{
    const div=document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute=('data-id', todo.id);

    if(todo.completed){
        div.classList.add('done');
    }
    document.getElementById('todo-list').appendChild(div);
};


const createTodos=(e)=>{
    e.preventDefault();
    console.log(e.target);


const newTodo={
     title: e.target.firstElementChild.value,
     completed: false
}
// fetch(apiUrl,{
//     method:'POST',
//     body:JSON.stringify(newTodo),
//     headers:{
//         'Content-Type': 'application/json'
//     }
//     })
//     .then(res=>res.json())
//     .then(data=>addTodoToDom(data));


};


const toggleCompleted=(e)=>{
    if(e.target.classList.contains('todo')){
    e.target.classList.toggle('done');
     updateTodo(e.target.dataset.id , e.target.classList.contains
        ('done'));
    // console.log(e.target.dataset.id);
}
};
const updateTodo=(id , completed)=>{
    // console.log(id,completed);
    fetch(`${apiUrl}/${id}`, {
        method:'PUT',
        body:JSON.stringify({completed}),
        headers:{
            'Content-Type':'application/json'
        },
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data));

};
const init=()=>{
document.addEventListener('DOMContentLoaded',getTodos);
document.querySelector('#todo-form').addEventListener
('submit',createTodos);
document.querySelector('#todo-list').addEventListener
('click',toggleCompleted)

};
init();





getTodos();
