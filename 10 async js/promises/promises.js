const promise= new Promise((resolve,reject)=>{
// Do some async task
setTimeout(() => {
    console.log('async task complete');
    // resolve();
}, 500);
});

promise.then(()=>{
    console.log('promisies consumed..');
});

const getUser=new Promise((resolve,reject)=>{
    // Do some async task
    setTimeout(() => {
        let error=false;
        if(!error){
        resolve({name:'sam',age:22});
        }
        else{
            reject('it is wrong')

        }
    },1000);

});
getUser
.then((user)=>console.log(user))
.catch((error)=>console.log(error))
.finally(()=>console.log('the promisies has been resolved or rejected'));
//         console.log('async task 22 complete');
//          resolve({name:'john',age:34});
//     }, 500);
// }).then((user)=>console.log(user));

 


// .then((name)=>{
    // console.log(name.length);
// });

// console.log(asdfgh)