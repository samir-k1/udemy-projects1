
console.log(1);

fetch('./movies.json')
.then((response)=>response.json())
.then ((data)=>console.log(data));

//txt file
fetch('./fetxh.txt')
.then((response)=>response.text())
.then ((data)=>console.log(data));
//fetcha n API
fetch('https://api.github.com/users')
.then((reply)=>reply.json())
.then ((data)=>console.log(data));