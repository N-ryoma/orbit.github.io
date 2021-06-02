'use strict';

window.onload = () => {
    const board = document.getElementById("img");
    const ctx = board.getContext("2d");
    
    const img = new Image();
    img.src = "https://www.toxsoft.com/sswpro/wall/sco1024x0768.png";
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 640, 480);
    }
}

const target = document.querySelectorAll(".target");
const canvases = document.getElementById("canvas");

for (let i = 0; i < target.length; i++) {
    target[i].addEventListener('click', (event) => {
        canvases = event.target.id
    }, false);
}







