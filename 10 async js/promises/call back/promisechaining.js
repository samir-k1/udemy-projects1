console.log(1)
// console.log(1)
const promise=new Promise((resolve,reject)=>{
setTimeout(() => {
   let error=false;
   if(!error){
   resolve( {title:'book',name:'jahangir name'})
   }
   else{
    reject('it is wrong');

   }
}, 1000);
});
promise.then((user)=>{
    console.log(user);
    return user.name;
})
.then((name)=>{
    console.log(name.length);
});