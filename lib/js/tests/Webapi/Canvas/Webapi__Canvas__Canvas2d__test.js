'use strict';

let Webapi__Canvas__Canvas2d = require("../../../src/Webapi/Canvas/Webapi__Canvas__Canvas2d.js");

let canvasEl = document.createElement("canvas");

let ctx = canvasEl.getContext("2d");

ctx.save();

ctx.restore();

ctx.scale(1, 2);

ctx.rotate(2);

ctx.translate(2, 3);

ctx.transform(1, 2, 1, 1, 1, 1);

ctx.globalAlpha = 0.9;

ctx.globalCompositeOperation = Webapi__Canvas__Canvas2d.Composite.sourceOver;

ctx.lineWidth = 1;

ctx.lineCap = Webapi__Canvas__Canvas2d.LineCap.butt;

ctx.lineJoin = Webapi__Canvas__Canvas2d.LineJoin.round;

ctx.miterLimit = 10;

ctx.strokeStyle = "red";

ctx.fillStyle = "red";

let match = Webapi__Canvas__Canvas2d.fillStyle(ctx);

switch (match[0]) {
  case "String" :
    console.log(match[1]);
    break;
  case "Gradient" :
    match[1].addColorStop(0.0, "red");
    break;
  case "Pattern" :
    break;
}

let match$1 = Webapi__Canvas__Canvas2d.strokeStyle(ctx);

switch (match$1[0]) {
  case "String" :
    console.log(match$1[1]);
    break;
  case "Gradient" :
    match$1[1].addColorStop(1.2, "blue");
    break;
  case "Pattern" :
    break;
}

ctx.shadowOffsetX = 1;

ctx.shadowOffsetY = 1;

ctx.shadowBlur = 1;

ctx.shadowColor = "red";

ctx.closePath();

ctx.moveTo(1, 1);

ctx.lineTo(1, 2);

ctx.quadraticCurveTo(1, 1, 1, 1);

ctx.bezierCurveTo(1, 1, 2, 2, 4, 4);

ctx.arc(1, 1, 4, 1, 3, true);

ctx.arcTo(1, 1, 2, 2, 4);

ctx.ellipse(1, 1, 4, 8, 4, 1, 3, true);

ctx.rect(0, 0, 10, 10);

ctx.roundRect(0, 0, 10, 10, 10);

ctx.beginPath();

ctx.stroke();

ctx.clip();

ctx.fill();

let pointInPath = ctx.isPointInPath(0, 0);

let linearGradient = ctx.createLinearGradient(0.0, 0.0, 0.0, 0.0);

ctx.strokeStyle = linearGradient;

let radialGradient = ctx.createRadialGradient(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

linearGradient.addColorStop(0.0, "red");

let noRepeatPatern = createPattern(ctx, document.createElement("img"), "no-repeat");

let repeatPatern = createPattern(ctx, document.createElement("img"), "repeat");

let repeatXPatern = createPattern(ctx, document.createElement("img"), "repeat-x");

let repeatYPatern = createPattern(ctx, document.createElement("img"), "repeat-y");

let measureText = ctx.measureText("foo");

let width = measureText.width;

ctx.fillText("foo!", 0.0, 0.0, width);

ctx.strokeText("foo!", 0.0, 0.0, width);

let image = new Image(16, 16);

ctx.drawImage(image, 0.0, 0.0);

ctx.drawImage(image, 0.0, 0.0, 16.0, 16.0);

ctx.drawImage(image, 0.0, 0.0, 16.0, 16.0, 0.0, 0.0, 16.0, 16.0);

let imageFromCoords = ctx.createImageData(0.0, 0.0);

let imageFromData = ctx.createImageData(imageFromCoords);

let w = imageFromCoords.width;

let h = imageFromCoords.height;

let frameFromImage = ctx.getImageData(0.0, 0.0, 0.0, 0.0);

ctx.putImageData(imageFromCoords, 0.0, 0.0);

ctx.putImageData(imageFromCoords, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

ctx.font = "10px Courier";

ctx.textAlign = "left";

ctx.textBaseline = "top";

ctx.fillText("hi", 1, 0, undefined);

ctx.strokeText("hi", 1, 0, undefined);

ctx.fillRect(1, 0, 10, 10);

ctx.strokeRect(1, 0, 10, 10);

ctx.clearRect(1, 0, 10, 10);

exports.canvasEl = canvasEl;
exports.ctx = ctx;
exports.pointInPath = pointInPath;
exports.linearGradient = linearGradient;
exports.radialGradient = radialGradient;
exports.noRepeatPatern = noRepeatPatern;
exports.repeatPatern = repeatPatern;
exports.repeatXPatern = repeatXPatern;
exports.repeatYPatern = repeatYPatern;
exports.measureText = measureText;
exports.width = width;
exports.image = image;
exports.imageFromCoords = imageFromCoords;
exports.imageFromData = imageFromData;
exports.w = w;
exports.h = h;
exports.frameFromImage = frameFromImage;
/* canvasEl Not a pure module */
