// let x;
//concatentaion methos
/*const arr1=[1,2,3,4,5,];
const arr2=[5,6,7];

const concatenatedArray=[...arr1, ...arr2];
// x=arr;
console.log(concatenatedArray);
x=arr1.Array(2);
x=arr1.from('12345');

console.log(x);
 const arr=[1,2,3,4,5];
 arr.reverse();
 arr.push(0)
 arr.unshift(6);
 console.log(arr);*/
 let x;

const person={
    name:'samir',
    age:21,
    isAdmin:true,
    address:{
        street:'34',
        houseNo:'134',
        city:'Doomdooma',

    },
};
x=person.name;
x=person['age'];
x=person.address.city;
person.name='rejia';
delete person.age;
person.greet =  function(){
    console.log(`hello ,my name is ${this.name}`);

};
person.greet();

// const person={
//    ' first name ':'brad',
//    'last name':'traversy',
// }



// x=person;
// console.log(x);

// console.log(person);
/*const post={
    id:1,
    name:'samir',
    age:12,
};
const str=JSON.stringify(post);

const obj=JSON.parse(str);
console.log(obj);*/

  
// const library=new Array["title","author","status"];

    const library=[
        {
        title:'wings' ,
        author:'nehru',
        status: {
            own:true,
            reading:false,
            read:false
        },

    },
    {
        title:'freedom' ,
        author:'gandhi',
        status: {
            own:true,
            reading:false,
            read:false
        },

    },
    {
        title:'nuclear' ,
        author:'kalam',
        status: {
            own:true,
            reading:false,
            read:false
        },

    },
    ];
// step 2

    library[0].status.read=true;
    library[1].status.read=true;
    library[2].status.read=true;
     const{ title:wings}=library[0];



     const libraryJSON=JSON.stringify(library);
     console.log(libraryJSON);
