let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = [];

function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.w = Math.floor(Math.random() * Math.floor(3)) + 1;
    this.s = (5-this.w)/3;

    this.animate = function() {
        if (this.y >= c.canvas.height) {
            this.y = 0;
            this.x = Math.floor(Math.random() * Math.floor(c.canvas.width));
        }
        else this.y += this.s;
        c.fillRect(this.x,this.y,this.w,this.w);
    }
}
function init() {
    for (i=0; i<500; i++) {
        stars.push(new Drop(
            Math.floor(Math.random() * Math.floor(c.canvas.width)),
            Math.floor(Math.random() * Math.floor(c.canvas.height))
        ));
    }
    c.fillStyle = "#FFFFFF";
    setInterval(function() {
        c.clearRect(0,0,c.canvas.width, c.canvas.height);
        for (d in stars) {
            stars[d].animate();
        }
    }, 30);
}

function upscale(id) {
    document.getElementById(id).style.textShadow = "rgba(0, 0, 0, 1) 15px 15px 7px";
}
function downscale(id) {
    document.getElementById(id).style.textShadow = "rgba(0, 0, 0, .8) 10px 10px 7px";
}
function showInfo(id) {
    let d = document.getElementById(id + "Outer");
    let info = document.getElementById(id + "Info");
    let count = 16;
    let interval = setInterval(animateDOM, 10);
    function animateDOM() {
        if (count <= 0) {
            clearInterval(interval);
            count = 0.0;
            let infoInterval = setInterval(infoAnimate, 10);

            function infoAnimate() {
                if (count >= 1.0) clearInterval(infoInterval);
                else {
                    count+=.01;
                    info.style.color = `rgba(255, 255, 255, ${count})`;
                    console.log("h");
                }
            }
        }
        else {
            count -= .1;
            d.style.marginTop = Math.pow(count, 2) + "px";
        }
    }
}
init();


