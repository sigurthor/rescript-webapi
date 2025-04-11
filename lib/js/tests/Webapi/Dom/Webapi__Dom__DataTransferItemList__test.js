'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");

let items = new DataTransfer().items;

let length = items.length;

let item = items[1];

let addedString = items.add("text", "text/plain");

items.remove(10);

items.clear();

let addedString$1 = (addedString == null) ? undefined : Primitive_option.some(addedString);

exports.items = items;
exports.length = length;
exports.item = item;
exports.addedString = addedString$1;
/* items Not a pure module */
