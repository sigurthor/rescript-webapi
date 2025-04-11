'use strict';

let Belt_Option = require("rescript/lib/js/Belt_Option.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__Document = require("../src/Webapi/Dom/Webapi__Dom__Document.js");
let Webapi__Dom__HtmlImageElement = require("../src/Webapi/Dom/Webapi__Dom__HtmlImageElement.js");

let url = "";

function processImage(url) {
  return new Promise((resolve, reject) => {
    let e = document.createElement("img");
    let maybeImg = Webapi__Dom__HtmlImageElement.ofElement(e);
    maybeImg.src = url;
    maybeImg.addEventListener("load", event => resolve(event));
    maybeImg.addEventListener("error", error => reject(error));
    let body = Belt_Option.flatMap(Webapi__Dom__Document.asHtmlDocument(document), prim => Primitive_option.fromNullable(prim.body));
    body.appendChild(maybeImg);
    body.removeChild(maybeImg);
  });
}

let test = processImage(url).then(event => {
  let img = Webapi__Dom__HtmlImageElement.ofElement(event.currentTarget);
  let width = img.naturalWidth;
  let height = img.naturalHeight;
  console.log("width", width, "height", height);
});

exports.url = url;
exports.processImage = processImage;
exports.test = test;
/* test Not a pure module */
