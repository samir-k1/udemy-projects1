// const words = ['sprayeeee', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
 const numbers=[1,2,3,4,5];
//  const evenNumbers = numbers.filter(function(num){
    // return num %2===0;
//  });

//   console.log(evenNumbers);


 
/* const names=['samir','roger','faiz','gfd','jhgfdws'];
  const nameCon=names.filter((word)=>word.length>6);
   console.log(nameCon);*/

let evenNumbers=[];
numbers.forEach((number)=>{
    if(number%2===0){
        evenNumbers.push(number);
    }
    });
    console.log(evenNumbers);


    const companies=[
       { name:'lifeboy',category:'product',start:1991,end:2018},
       { name:'dettol',category:'product',start:1901,end:2015},
       { name:'colgate',category:'tootpaste',start:1991,end:2019},
       { name:'rin',category:'washing',start:1921,end:2014},

    ]

    //  const companyStats=companies.filter((company)=>company.start===1991);

//    console.log(companyStats);

   const companyStatics=companies.filter((company)=>company.start<=1991&& company.end<=2018);

   console.log(companyStatics);
