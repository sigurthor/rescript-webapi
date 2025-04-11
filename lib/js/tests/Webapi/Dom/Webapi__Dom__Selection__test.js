'use strict';

let TestHelpers = require("../../testHelpers.js");
let Webapi__Dom__Document = require("../../../src/Webapi/Dom/Webapi__Dom__Document.js");

let node = document.createElement("strong");

let sel = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__Document.asHtmlDocument(document)).getSelection();

let range = new Range();

sel.getRangeAt(0);

sel.collapse(node, 0);

sel.extend(node, 0);

sel.collapseToStart();

sel.collapseToEnd();

sel.selectAllChildren(node);

sel.addRange(range);

sel.removeRange(range);

sel.removeAllRanges();

sel.deleteFromDocument();

sel.setBaseAndExtent(node, 0, node, 0);

sel.toString();

sel.containsNode(node, false);

sel.containsNode(node, true);

exports.node = node;
exports.sel = sel;
exports.range = range;
/* node Not a pure module */
