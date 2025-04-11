'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__HtmlInputElement = require("../../../src/Webapi/Dom/Webapi__Dom__HtmlInputElement.js");

let input = Webapi__Dom__HtmlInputElement.ofElement(document.body);

if (input !== undefined) {
  let input$1 = Primitive_option.valFromOption(input);
  input$1.focus();
  input$1.select();
}

/* input Not a pure module */
