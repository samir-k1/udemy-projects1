/*function first(){
    console.log('first...');
    second();
}
function second(){
    console.log('second...');
    third();
}
function third(){
    console.log('third...');
    first();
}
first ();
second(); 
third ();*/
const d=new Date(10,15,2023,11,0);
const hour=d.getHours();
if(hour<12){
    console.log('good morning');
}
else if(hour<18){
    console.log('good afternoon')
}
else{
    console.log('good Night');
}

if(hour<12){
    console.log('good morning')
if(hour===6){
console.log('wake up');
} 

if(hour>=10&& hour<=17){
    console.log('work time');

}
}
