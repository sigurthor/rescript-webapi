'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");

let tlist = document.createElement("div").classList;

let length = tlist.length;

let item = tlist.item(3);

tlist.add("my-class");

tlist.add("my-class", "my-other-class");

let contains = tlist.contains("my-class");

tlist.forEach((item, param) => {
  console.log(item);
});

tlist.remove("my-class");

tlist.remove("my-class", "my-other-class");

tlist.replace("my-class", "my-other-class");

let supports = tlist.supports("my-class");

let toggle = tlist.toggle("my-class");

let toggleForced = tlist.toggle("my-class", false);

let toString = tlist.toString();

let value = tlist.value;

tlist.value = "foo";

let item$1 = (item == null) ? undefined : Primitive_option.some(item);

let setValue;

exports.tlist = tlist;
exports.length = length;
exports.item = item$1;
exports.contains = contains;
exports.supports = supports;
exports.toggle = toggle;
exports.toggleForced = toggleForced;
exports.toString = toString;
exports.value = value;
exports.setValue = setValue;
/* tlist Not a pure module */
