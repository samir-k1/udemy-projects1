let x;
let d =new Date();
/*x=d.toString();
x=d.getFullYear();
 x=d.getTime();
// x=d.getMonth();
// x=d.getData();
x=d.getDay();
x=d.getHours();
x=d.getSeconds();
console.log(x);
x=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
x=Intl.DataTimeFormat('en-US').format(d);
x = Intl.DataTimeFormat('en-GB').format(d);
x =Intl.DataTimeFormat('default').formal(d);*/

x = d.toLocaleDateString('default'),{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric', 
    hour:'numeric',
    minutes:'numeric',
    timeZone:'India/Delhi',
    


};
console.log(x);

      