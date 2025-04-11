'use strict';

let Js_option = require("rescript/lib/js/Js_option.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");

let item = Js_option.getExn(new DataTransfer().items[0]);

let kind = item.kind;

let itemType = item.type;

item.getAsString(_str => {});

let file = item.getFile();

let file$1 = (file == null) ? undefined : Primitive_option.some(file);

let kindString = "file";

exports.item = item;
exports.kind = kind;
exports.itemType = itemType;
exports.file = file$1;
exports.kindString = kindString;
/* item Not a pure module */
