'use strict';

let Js_array = require("rescript/lib/js/Js_array.js");
let Belt_Option = require("rescript/lib/js/Belt_Option.js");
let TestHelpers = require("../testHelpers.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__Document = require("../../src/Webapi/Dom/Webapi__Dom__Document.js");

let el = document.createElement("div");

let body = TestHelpers.unsafelyUnwrapOption(Belt_Option.flatMap(Webapi__Dom__Document.asHtmlDocument(document), prim => Primitive_option.fromNullable(prim.body)));

el.innerText = "Hello There";

el.setAttribute("style", "margin-top: 800px; margin-bottom: 800px");

body.appendChild(el);

function handler(entries, observer) {
  Js_array.forEach(entry => {
    console.log(entry.time);
    console.log(entry.rootBounds);
    console.log(entry.boundingClientRect);
    console.log(entry.intersectionRect);
    console.log(entry.isIntersecting);
    console.log(entry.intersectionRatio);
    console.log(entry.target);
  }, entries);
  observer.unobserve(el);
}

let observer = new IntersectionObserver(handler);

observer.observe(el);

observer.unobserve(el);

observer.observe(el);

observer.disconnect();

exports.el = el;
exports.body = body;
exports.handler = handler;
exports.observer = observer;
/* el Not a pure module */
