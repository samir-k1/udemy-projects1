const canvas=document.getElementById('my-canvas')
const ctx= canvas.getContext('2d');

//draw rectangle 

ctx.fillStyle='green';
ctx.fillRect(10,10,150,100);

 // fro drawaing a cricle
  ctx.fillStyle='red'
  ctx.arc(300,300,100,0,Math.PI*2);

ctx.fill()


//draw lines

ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineWidth=5
ctx.lineTo(300,300);
ctx.stroke()


// draw text

ctx.font="30px Arial";
ctx.fillStyle='blue';
ctx.fillText('samir',270,150,200)

const image=document.querySelector('img');

image.style.display='none';

image.addEventListener('load',()=> ctx.drawImage(image,250,270,100,100))

