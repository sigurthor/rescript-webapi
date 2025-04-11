'use strict';

let Belt_Option = require("rescript/lib/js/Belt_Option.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__Element = require("../../../src/Webapi/Dom/Webapi__Dom__Element.js");
let Webapi__Dom__DomStringMap = require("../../../src/Webapi/Dom/Webapi__Dom__DomStringMap.js");

let __x = Webapi__Dom__Element.asHtmlElement(document.createElement("div"));

let dataset = Belt_Option.map(__x, prim => prim.dataset);

if (dataset !== undefined) {
  let dataset$1 = Primitive_option.valFromOption(dataset);
  dataset$1["fooKey"] = "barValue";
  Webapi__Dom__DomStringMap.unsafeDeleteKey(dataset$1, "fooKey");
}

exports.dataset = dataset;
/* __x Not a pure module */
