const Numbers=[1,2,3,-8,-4,9];
 const positveSum=Numbers
 .filter((number)=>number>=0)
 .reduce((acc,number)=>acc+number,0);


//  console.log(positveSum);

 const array=['Samir','rohit','rejia','Razik'];


 const captialLetter= array.map((letter)=>{
    return letter[0].toUpperCase() +letter.slice(1,letter.length);
 });
 console.log(captialLetter);