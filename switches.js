/*const d= new Date (2023,1,12,14,0);
const month =d.getMonth();
const hour=d.getHours();
switch(month){
    case 1:
   console.log('its jan');
   break;
   case 2:
    console.log('its feb');
   break;
   case 3:
    console.log('its math');
   break;
   case 4:
    console.log('its april');
   break;

   default:
    console.log('it is not Jan');
}
switch(true){
    case hour<15:
    
    console.log('day has been stared');
    break;

    case hour <18:
        console.log('night has been stared');
        break;

    }*/


    //  calcutaor
 function calculator(num1,num2,operator){
 let result;
 switch(operator){
    case '+':
    result=num1 + num2;
    break;
 }
 console.log(result);
 return result;
}
calculator(2,4,'+');



