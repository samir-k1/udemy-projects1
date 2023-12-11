/*function addDollarSign(value){
    return '$'+value;

}
console.log(addDollarSign(100));

const addPLusSign=function (value){
    return'+' + value
};
console.log(addPLusSign(200));*/
 

/*function getCelsius(farenheit){
     var celsius=(farenheit-32*5/9);
     return celsius;
}
     console.log(getCelsius(56));



function getFahrenheit(celsius){
    var farenheit=celsius*(9/5)+32;
    return farenheit;
 }
     console.log(getFahrenheit(23));


     function minMax(arr){
        const min=Math.min(...arr);
        const max=Math.max(...arr);

        console.log(min);
}
 minMax([1,2,3,4,5]);
 

 function maxValue(arr){
    const max=Math.max(...arr);
    console.log(max);

 }
 maxValue([1,2,3,4,5]);*/

 function totalArea(length,breadth ){
     
 if(length>=0 && breadth>=0){
    return length*breadth;
 }
 else{
    return "invalid output";
 }
}
const length=10;
const breadth=2;
const area= totalArea(length,breadth);
console.log("total area is"+ area);

 
 
    
 
 
      