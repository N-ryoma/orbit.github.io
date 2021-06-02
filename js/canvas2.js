'use strict'

function start() {

let xb = 320+6378;
let xb2 = 0;
let xb3 = 0;
let xb4 = 0;

let dxb = 0;
let dxb2 = 0;
let dxb3 = 0;
let dxb4 = 0;

let yb = 240+0;
let yb2 = 0;
let yb3 = 0;
let yb4 = 0;

let dyb = 11.18; //第二宇宙速度　地球脱出//
let dyb2 = 0;
let dyb3 = 0;
let dyb4 = 0;

let kb1 = 0;
let kb2 = 0;
let kb3 = 0;
let kb4 = 0;

let ib1 = 0;
let ib2 = 0;
let ib3 = 0;
let ib4 = 0;

let jb1 = 0;
let jb2 = 0;
let jb3 = 0;
let jb4 = 0;

let lb1 = 0;
let lb2 = 0;
let lb3 = 0;
let lb4 = 0;
   
    
const main2 = () => {
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');

    let prev_time = new Date ();

    const dt = 60;
    const u = 398600;   
    const r = 5;

    const draw = () => {
        ctx.clearRect (0, 0, 640, 480);
        const now = new Date();
        prev_time = now;

        ib1 = - ((u * xb) / ( (xb ** 2 + yb ** 2) ** (3/2) )) * dt;
        lb1 = - ((u * yb) / ( (xb ** 2 + yb ** 2) ** (3/2) )) * dt;

        kb1 = dxb * dt;
        jb1 = dyb * dt;

        dxb2 = dxb + ib1 / 2;
        dyb2 = dyb + lb1 / 2;

        xb2 = xb + kb1 / 2;
        yb2 = yb + jb1 / 2;

        
        ib2 = - ((u * xb2) / ( (xb2 ** 2 + yb2 ** 2) ** (3/2) )) * dt;
        lb2 = - ((u * yb2) / ( (xb2 ** 2 + yb2 ** 2) ** (3/2) )) * dt;

        kb2 = dxb2 * dt;
        jb2 = dyb2 * dt;

        dxb3 = dxb + ib2 / 2;
        dyb3 = dyb + lb2 / 2;

        xb3 = xb + kb2 / 2;
        yb3 = yb + jb2 / 2;

        
        ib3 = - ((u * xb3) / ( (xb3 ** 2 + yb3 ** 2) ** (3/2) )) * dt;
        lb3 = - ((u * yb3) / ( (xb3 ** 2 + yb3 ** 2) ** (3/2) )) * dt;

        kb3 = dxb3 * dt;
        jb3 = dyb3 * dt;

        dxb4 = dxb + ib3;
        dyb4 = dyb + lb3;

        xb4 = xb + kb3;
        yb4 = yb + jb3;


        ib4 = - ((u * xb4) / ( (xb4 ** 2 + yb4 ** 2) ** (3/2) )) * dt;
        lb4 = - ((u * yb4) / ( (xb4 ** 2 + yb4 ** 2) ** (3/2) )) * dt;

        kb4 = dxb4 * dt;
        jb4 = dyb4 * dt;

        dxb = dxb + (ib1 + ib2*2 + ib3*2 + ib4) / 6;
        dyb = dyb + (lb1 + lb2*2 + lb3*2 + lb4) / 6;

        xb = xb + (kb1 + kb2*2 + kb3*2 + kb4) / 6;
        yb = yb + (jb1 + jb2*2 + jb3*2 + jb4) / 6;


        ctx.fillStyle = "rgba(0, 255, 0, 200)";
        ctx.beginPath();
        ctx.arc(320+xb*(20/6378), 240+yb*(20/6378), r, 0, Math.PI*2, false);
        ctx.fill();

        requestAnimationFrame(draw);
    }
    draw();
}

document.getElementById('btn2').addEventListener('click', main2);
}
document.getElementById('btn2').addEventListener('click', start);



