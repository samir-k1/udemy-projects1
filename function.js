function samir(){
    console.log("heh man");
}
samir();

function add(num1 ,num2){
console.log(num1+num2);
}
add(3,5);

function subtract(num1,num2){
    return num1-num2;
}
     const result=subtract(14,2);
     console.log(result,subtract(20,5));
 
     function isRegistered(user){
        if(!user){
            user='bot';
        }
        return user +'is registered';
     }


     console.log(isRegistered(''));
          
     // rest parameters
    /*function sum(...numbers){
    let total=0;
    for(const num of numbers){
        total +=num;
    }

     return total;
    }
 console.log(sum(1,2,3));*/

//obj as params


/*const user={
    id:1,
    name:'john',
};
function LoginUser (user){
return`the user ${user.name}with the id of ${user.id}is logged in`;
}
console.log(LoginUser(user));*/

function details(person){
    return`the id is ${person.id} and the name is ${person.name}and the product is ${person.product}`;
    }
const person={
    id:1,
    name:'samir',
    product:'shampoo',
    
};

console.log(details(person));
console.log(details({
        id:2,
    name:'kabir',
    poduct:'bag',
    })
    );

    console.log(details({
        id:3,
        name:'gandhi',
        poduct:'ball',

    })
    );

// arr as param
 /*function getRandom(arr){
const randomIndex=Math.floor(Math.random()*arr.length);
const item=arr[randomIndex];
console.log(item);
}
getRandom([1,3,4,5,6]);*/

// GLOBAL  AND FUNCTION SCOPE
// window.alert('Hello');










