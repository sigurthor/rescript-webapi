'use strict';

let Webapi__Dom__Text = require("../../../src/Webapi/Dom/Webapi__Dom__Text.js");

let node = document.createTextNode("text");

let text = Webapi__Dom__Text.ofNode(node);

exports.node = node;
exports.text = text;
/* node Not a pure module */
