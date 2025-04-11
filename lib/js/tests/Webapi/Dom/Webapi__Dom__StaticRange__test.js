'use strict';


let element = document.createElement("strong");

let text = document.createTextNode("text");

let range = new StaticRange({
  startContainer: element,
  startOffset: 1,
  endContainer: text,
  endOffset: 1
});

let collapsed = range.collapsed;

let endContainer = range.endContainer;

let endOffset = range.endOffset;

let startContainer = range.startContainer;

let startOffset = range.startOffset;

exports.element = element;
exports.text = text;
exports.range = range;
exports.collapsed = collapsed;
exports.endContainer = endContainer;
exports.endOffset = endOffset;
exports.startContainer = startContainer;
exports.startOffset = startOffset;
/* element Not a pure module */
