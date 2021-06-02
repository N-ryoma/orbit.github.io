'use strict'

let xc = 320+6378;
let xc2 = 0;
let xc3 = 0;
let xc4 = 0;

let dxc = 0;
let dxc2 = 0;
let dxc3 = 0;
let dxc4 = 0;

let yc = 240+0;
let yc2 = 0;
let yc3 = 0;
let yc4 = 0;

let dyc = 10; //楕円軌道　10km/s//
let dyc2 = 0;
let dyc3 = 0;
let dyc4 = 0;

let kc1 = 0;
let kc2 = 0;
let kc3 = 0;
let kc4 = 0;

let ic1 = 0;
let ic2 = 0;
let ic3 = 0;
let ic4 = 0;

let jc1 = 0;
let jc2 = 0;
let jc3 = 0;
let jc4 = 0;

let lc1 = 0;
let lc2 = 0;
let lc3 = 0;
let lc4 = 0;
   
    
const main3 = () => {
    const canvas = document.getElementById('canvas3');
    const ctx = canvas.getContext('2d');

    let prev_time = new Date ();

    const dt = 60;
    const u = 398600;   
    const r = 5;

    const draw = () => {
        ctx.clearRect (0, 0, 640, 480);
        const now = new Date();
        prev_time = now;

        ic1 = - ((u * xc) / ( (xc ** 2 + yc ** 2) ** (3/2) )) * dt;
        lc1 = - ((u * yc) / ( (xc ** 2 + yc ** 2) ** (3/2) )) * dt;

        kc1 = dxc * dt;
        jc1 = dyc * dt;

        dxc2 = dxc + ic1 / 2;
        dyc2 = dyc + lc1 / 2;

        xc2 = xc + kc1 / 2;
        yc2 = yc + jc1 / 2;

        
        ic2 = - ((u * xc2) / ( (xc2 ** 2 + yc2 ** 2) ** (3/2) )) * dt;
        lc2 = - ((u * yc2) / ( (xc2 ** 2 + yc2 ** 2) ** (3/2) )) * dt;

        kc2 = dxc2 * dt;
        jc2 = dyc2 * dt;

        dxc3 = dxc + ic2 / 2;
        dyc3 = dyc + lc2 / 2;

        xc3 = xc + kc2 / 2;
        yc3 = yc + jc2 / 2;

        
        ic3 = - ((u * xc3) / ( (xc3 ** 2 + yc3 ** 2) ** (3/2) )) * dt;
        lc3 = - ((u * yc3) / ( (xc3 ** 2 + yc3 ** 2) ** (3/2) )) * dt;

        kc3 = dxc3 * dt;
        jc3 = dyc3 * dt;

        dxc4 = dxc + ic3;
        dyc4 = dyc + lc3;

        xc4 = xc + kc3;
        yc4 = yc + jc3;


        ic4 = - ((u * xc4) / ( (xc4 ** 2 + yc4 ** 2) ** (3/2) )) * dt;
        lc4 = - ((u * yc4) / ( (xc4 ** 2 + yc4 ** 2) ** (3/2) )) * dt;

        kc4 = dxc4 * dt;
        jc4 = dyc4 * dt;

        dxc = dxc + (ic1 + ic2*2 + ic3*2 + ic4) / 6;
        dyc = dyc + (lc1 + lc2*2 + lc3*2 + lc4) / 6;

        xc = xc + (kc1 + kc2*2 + kc3*2 + kc4) / 6;
        yc = yc + (jc1 + jc2*2 + jc3*2 + jc4) / 6;


        ctx.fillStyle = "rgba(0, 0, 255, 200)";
        ctx.beginPath();
        ctx.arc(320+xc*(20/6378), 240+yc*(20/6378), r, 0, Math.PI*2, false);
        ctx.fill();

        requestAnimationFrame(draw);
    }
    draw();
}

document.addEventListener('DOMContentLoaded', main3);




