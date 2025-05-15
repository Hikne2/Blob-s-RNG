const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');

let canvasWidth = 1080;
let canvasHeight = 1920;
function resizeCanvas() {
   // canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    ctx.scale(canvas.width / canvasWidth, canvas.height / canvasHeight);
    document.getElementById("info").innerHTML = `Canvas size: ${window.innerWidth} x ${window.innerHeight}`;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);




function draw(){
    console.log("Drawing...");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'black';
    ctx.fillRect(5, 5, canvasWidth-10, canvasHeight-10);
}
setInterval(draw, 1000 / 60);