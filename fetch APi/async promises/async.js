const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve({ name: 'samir', age: 12 });
    }, 1000);
 });
 
 promise.then((data) => console.log(data));

 //using async promises

 async function getPromises(){
    const response=await promise;
    console.log(response);

 }
 getPromises();


 //fetch using asynce 
 async function getUser(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);
 }

 getUser();

 //udring arrow funciton
  const getPost=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);
  }

  getPost();