'use strict'



let xa = 320+6378;
let xa2 = 0;
let xa3 = 0;
let xa4 = 0;

let dxa = 0;
let dxa2 = 0;
let dxa3 = 0;
let dxa4 = 0;

let ya = 240+0;
let ya2 = 0;
let ya3 = 0;
let ya4 = 0;

let dya = 7.9;
let dya2 = 0;
let dya3 = 0;
let dya4 = 0;

let ka1 = 0;
let ka2 = 0;
let ka3 = 0;
let ka4 = 0;

let ia1 = 0;
let ia2 = 0;
let ia3 = 0;
let ia4 = 0;

let ja1 = 0;
let ja2 = 0;
let ja3 = 0;
let ja4 = 0;

let la1 = 0;
let la2 = 0;
let la3 = 0;
let la4 = 0;

const dt = 60;
const u = 398600;


const main = () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    let prev_time = new Date ();
 
    const r = 5;

    const draw = () => {
        ctx.clearRect (0, 0, 640, 480);
        const now = new Date();
        prev_time = now;

        ia1 = - ((u * xa) / ( (xa ** 2 + ya ** 2) ** (3/2) )) * dt;
        la1 = - ((u * ya) / ( (xa ** 2 + ya ** 2) ** (3/2) )) * dt;

        ka1 = dxa * dt;
        ja1 = dya * dt;

        dxa2 = dxa + ia1 / 2;
        dya2 = dya + la1 / 2;

        xa2 = xa + ka1 / 2;
        ya2 = ya + ja1 / 2;

        
        ia2 = - ((u * xa2) / ( (xa2 ** 2 + ya2 ** 2) ** (3/2) )) * dt;
        la2 = - ((u * ya2) / ( (xa2 ** 2 + ya2 ** 2) ** (3/2) )) * dt;

        ka2 = dxa2 * dt;
        ja2 = dya2 * dt;

        dxa3 = dxa + ia2 / 2;
        dya3 = dya + la2 / 2;

        xa3 = xa + ka2 / 2;
        ya3 = ya + ja2 / 2;

        
        ia3 = - ((u * xa3) / ( (xa3 ** 2 + ya3 ** 2) ** (3/2) )) * dt;
        la3 = - ((u * ya3) / ( (xa3 ** 2 + ya3 ** 2) ** (3/2) )) * dt;

        ka3 = dxa3 * dt;
        ja3 = dya3 * dt;

        dxa4 = dxa + ia3;
        dya4 = dya + la3;

        xa4 = xa + ka3;
        ya4 = ya + ja3;


        ia4 = - ((u * xa4) / ( (xa4 ** 2 + ya4 ** 2) ** (3/2) )) * dt;
        la4 = - ((u * ya4) / ( (xa4 ** 2 + ya4 ** 2) ** (3/2) )) * dt;

        ka4 = dxa4 * dt;
        ja4 = dya4 * dt;

        dxa = dxa + (ia1 + ia2*2 + ia3*2 + ia4) / 6;
        dya = dya + (la1 + la2*2 + la3*2 + la4) / 6;

        xa = xa + (ka1 + ka2*2 + ka3*2 + ka4) / 6;
        ya = ya + (ja1 + ja2*2 + ja3*2 + ja4) / 6;


        ctx.fillStyle = "rgba(255, 0, 0, 200)";
        ctx.beginPath();
        ctx.arc(320+xa*(20/6378), 240+ya*(20/6378), r, 0, Math.PI*2, false);
        ctx.fill();

        requestAnimationFrame(draw);
    }
    draw();
}
document.addEventListener('DOMContentLoaded', main);
