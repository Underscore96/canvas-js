


// const canvasCollection = document.getElementsByClassName('my-canvas');
// const canvasA = canvasCollection[0];
// console.log(canvasA);

// const canvasCollection2 = document.getElementsByTagName('canvas');
// const canvasB = canvasCollection2[0];
// console.log(canvasB);

// const canvasC = document.querySelector('.my-canvas');

// const canvasD = document.querySelector('#canvas1');

// const canvasE = document.querySelector('canvas');

// const canvasCollection3 = document.querySelectorAll('.my-canvas')




const canvas = document.getElementById('canvas1');
// // console.log(canvas.width);
// // console.log(canvas.height);
const ctx = canvas.getContext('2d');


// // ctx.rect(10, 10, 100, 100);

// // ctx.rect(canvas.width-110,canvas.height-110, 100, 100);
// // ctx.rect(canvas.width-110, 10, 100, 100);
// // ctx.rect(19, canvas.height-110, 100, 100);
// // ctx.fill()


// ctx.fillStyle = 'orange'

// ctx.strokeStyle = 'blue'

// ctx.lineWidth = 15;

// ctx.fillRect(10,10,100,100);

// ctx.strokeRect(200, 200, 100, 100);

// ctx.clearRect(50, 50, 20, 20);





// ctx.lineWidth = 4;
// ctx.strokeStyle = "pink";
// ctx.moveTo(20, 140);
// ctx.stroke();


// ctx.beginPath();
// ctx.arc(canvas.width/2, canvas.height/2, 200, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 50);
// ctx.lineTo(200, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();

