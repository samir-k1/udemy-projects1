 const numbers=[1,2,3,4,5,6];
// const mapping=numbers.map((num)=>num*2);
// console.log(mapping);

// const mapping2=[];
// numbers.forEach((number)=>{
    // mapping2.push(number*2);
// });
// console.log(mapping2);  

const companies=[
    { name:'lifeboy',category:'product',start:1991,end:2018},
    { name:'dettol',category:'product',start:1901,end:2015},
    { name:'colgate',category:'tootpaste',start:1991,end:2019},
    { name:'rin',category:'washing',start:1921,end:2014},

 ];

//  const companyStats= companies.map((company)=>company.name);
//  console.log(companyStats);

//create an array with just company and category
// const companyInfo=companies.map((stats)=>{
   /*return{
  name:  stats.name,
   category: stats.category,
   };
});*/
//  console.log(companyInfo); 
//  create an array of obj with the name and the length of each comapny 
// in year
/*const companyYear=companies.map((yearStats)=>{
    return {
        name: yearStats.name,
        length: yearStats.end-yearStats.start+'years',
    };
});
console.log(companyYear);*/
// chain map methods
 /* squareAndDouble = numbers.map((number)=>Math.sqrt(number))
 .map((sqrt)=>sqrt*2);
console.log(squareAndDouble);

const evenDouble=numbers
.filter((number)=>number %2===0)
.map((number)=>number *2);
console.log(evenDouble); 
// Array. reduce()*/

 const array=[1,2,3,4,5];


//  const sum=array.reduce((acc, curr)=> acc +curr,90)
//  ;
//  {
    // console.log(sum); 

//  }

/*const sum3=()=> 
  {
    let acc=0;
    for(const cur of numbers){
        acc=acc+cur;
    }
    return acc;
  }
console.log(sum3());

 const cart=[
    {id:1,product:1, price:130},
    {id:2,product:2, price:130},

    {id:3,product:3, price:130},

 ];
 const total= cart.reduce((acc,product)=>
 acc+product.price,0);

 console.log(total);

 const total1= cart.reduce(function(acc,product){
    return acc+product.price;
 },0);

 console.log(total1);*/


