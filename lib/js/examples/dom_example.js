'use strict';

let Belt_Option = require("rescript/lib/js/Belt_Option.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__Element = require("../src/Webapi/Dom/Webapi__Dom__Element.js");
let Webapi__Dom__Document = require("../src/Webapi/Dom/Webapi__Dom__Document.js");

function unwrapUnsafely(x) {
  if (x !== undefined) {
    return Primitive_option.valFromOption(x);
  }
  throw {
    RE_EXN_ID: "Invalid_argument",
    _1: "Passed `None` to unwrapUnsafely",
    Error: new Error()
  };
}

document.createElement("div").className;

Belt_Option.map(Primitive_option.fromNullable(document.createElement("div").nextElementSibling), prim => prim.innerText);

Belt_Option.map(Primitive_option.fromNullable(document.createElement("div").parentElement), prim => prim.innerText);

let el = unwrapUnsafely(Webapi__Dom__Element.asHtmlElement(document.createElement("div")));

Belt_Option.map(Belt_Option.flatMap(Webapi__Dom__Document.asHtmlDocument(document), prim => Primitive_option.fromNullable(prim.body)), body => {
  body.appendChild(el);
});

document.createElement("div").addEventListener("mousemove", e => {
  console.log([
    e.screenX,
    e.screenY
  ]);
});

function handleClick(param) {
  console.log("clicked");
}

window.addEventListener("click", handleClick);

window.addEventListener("click", handleClick, {
  passive: true,
  once: true,
  capture: false
});

window.addEventListener("click", handleClick, true);

window.removeEventListener("click", handleClick);

window.removeEventListener("click", handleClick, {
  passive: true,
  capture: false
});

window.removeEventListener("click", handleClick, true);

exports.unwrapUnsafely = unwrapUnsafely;
exports.el = el;
/*  Not a pure module */
