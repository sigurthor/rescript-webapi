'use strict';

let Stdlib_Option = require("rescript/lib/js/Stdlib_Option.js");

let el = document.createElement("strong");

function handler(entries) {
  let entry = Stdlib_Option.getExn(entries[0], undefined);
  let cr = entry.contentRect;
  let t = entry.target;
  console.log(cr, t);
}

let observer = new ResizeObserver(handler);

observer.observe(el);

observer.unobserve(el);

observer.disconnect();

exports.el = el;
exports.handler = handler;
exports.observer = observer;
/* el Not a pure module */
