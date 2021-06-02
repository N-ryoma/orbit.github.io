'use strict'

let x = 320+42164;
let x2 = 0;
let x3 = 0;
let x4 = 0;

let dx = 0;
let dx2 = 0;
let dx3 = 0;
let dx4 = 0;

let y = 240+0;
let y2 = 0;
let y3 = 0;
let y4 = 0;

let dy = 3.0; //静止衛星軌道//
let dy2 = 0;
let dy3 = 0;
let dy4 = 0;

let k1 = 0;
let k2 = 0;
let k3 = 0;
let k4 = 0;

let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;

let j1 = 0;
let j2 = 0;
let j3 = 0;
let j4 = 0;

let l1 = 0;
let l2 = 0;
let l3 = 0;
let l4 = 0;
   
    
const main4 = () => {
    const canvas = document.getElementById('canvas4');
    const ctx = canvas.getContext('2d');

    let prev_time = new Date ();

    const dt = 60;
    const u = 398600;   
    const r = 5;

    const draw = () => {
        ctx.clearRect (0, 0, 640, 480);
        const now = new Date();
        prev_time = now;

        i1 = - ((u * x) / ( (x ** 2 + y ** 2) ** (3/2) )) * dt;
        l1 = - ((u * y) / ( (x ** 2 + y ** 2) ** (3/2) )) * dt;

        k1 = dx * dt;
        j1 = dy * dt;

        dx2 = dx + i1 / 2;
        dy2 = dy + l1 / 2;

        x2 = x + k1 / 2;
        y2 = y + j1 / 2;

        
        i2 = - ((u * x2) / ( (x2 ** 2 + y2 ** 2) ** (3/2) )) * dt;
        l2 = - ((u * y2) / ( (x2 ** 2 + y2 ** 2) ** (3/2) )) * dt;

        k2 = dx2 * dt;
        j2 = dy2 * dt;

        dx3 = dx + i2 / 2;
        dy3 = dy + l2 / 2;

        x3 = x + k2 / 2;
        y3 = y + j2 / 2;

        
        i3 = - ((u * x3) / ( (x3 ** 2 + y3 ** 2) ** (3/2) )) * dt;
        l3 = - ((u * y3) / ( (x3 ** 2 + y3 ** 2) ** (3/2) )) * dt;

        k3 = dx3 * dt;
        j3 = dy3 * dt;

        dx4 = dx + i3;
        dy4 = dy + l3;

        x4 = x + k3;
        y4 = y + j3;


        i4 = - ((u * x4) / ( (x4 ** 2 + y4 ** 2) ** (3/2) )) * dt;
        l4 = - ((u * y4) / ( (x4 ** 2 + y4 ** 2) ** (3/2) )) * dt;

        k4 = dx4 * dt;
        j4 = dy4 * dt;

        dx = dx + (i1 + i2*2 + i3*2 + i4) / 6;
        dy = dy + (l1 + l2*2 + l3*2 + l4) / 6;

        x = x + (k1 + k2*2 + k3*2 + k4) / 6;
        y = y + (j1 + j2*2 + j3*2 + j4) / 6;


        ctx.fillStyle = "rgba(255, 0, 255, 200)";
        ctx.shadowColor =　"#555";
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.beginPath();
        ctx.arc(320+x*(20/6378), 240+y*(20/6378), r, 0, Math.PI*2, false);
        ctx.fill();

        requestAnimationFrame(draw);
    }
    draw();
}

document.addEventListener('DOMContentLoaded', main4);




