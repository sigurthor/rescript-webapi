'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__Types = require("../../../src/Webapi/Dom/Webapi__Dom__Types.js");
let Webapi__Dom__Document = require("../../../src/Webapi/Dom/Webapi__Dom__Document.js");
let Webapi__Dom__NodeFilter = require("../../../src/Webapi/Dom/Webapi__Dom__NodeFilter.js");

let el = document.createElement("strong");

let e = document.activeElement;

if (!(e == null)) {
  console.log(e);
}

let characterSet = document.characterSet;

let compatMode = Webapi__Dom__Document.compatMode(document);

let doctype = document.doctype;

let documentElement = document.documentElement;

let documentURI = document.documentURI;

let hidden = document.hidden;

let implementation = document.implementation;

let lastStyleSheetSet = document.lastStyleSheetSet;

let pointerLockElement = document.pointerLockElement;

let preferredStyleSheetSet = document.preferredStyleSheetSet;

let scrollingElement = document.scrollingElement;

let selectedStyleSheetSet = document.selectedStyleSheetSet;

document.selectedStyleSheetSet = "muh-stylesheet";

let styleSheets = document.styleSheets;

let styleSheetSets = document.styleSheetSets;

let visibilityState = Webapi__Dom__Document.visibilityState(document);

let adoptNode = document.adoptNode(el);

let createAttribute = document.createAttribute("data-foo");

let createAttributeNS = document.createAttributeNS("http://...", "foo");

let createComment = document.createComment("witty comment");

let createDocumentFragment = document.createDocumentFragment();

let createElement = document.createElement("div");

let elementWithOptions = document.createElement("div", {});

let elementNS = document.createElementNS("http://...", "foo");

let elementNsWithOptions = document.createElementNS("http://...", "div", {});

let createEvent = document.createEvent("MyCustomEvent");

let createNodeIterator = document.createNodeIterator(el);

let createNodeIteratorWithWhatToShow = document.createNodeIterator(el, Webapi__Dom__Types.WhatToShow._All);

let createNodeIteratorWithWhatToShowFilter = document.createNodeIterator(el, Webapi__Dom__Types.WhatToShow.many({
  hd: Webapi__Dom__Types.WhatToShow._Element,
  tl: {
    hd: Webapi__Dom__Types.WhatToShow._Attribute,
    tl: /* [] */0
  }
}), Webapi__Dom__NodeFilter.make(param => 0));

let createRange = document.createRange();

let createTextNode = document.createTextNode("Very reasonable!");

let createTreeWalker = document.createTreeWalker(el);

let createTreeWalkerWithWhatToShow = document.createTreeWalker(el, Webapi__Dom__Types.WhatToShow._All);

let createTreeWalkerWithWhatToShowFilter = document.createTreeWalker(el, Webapi__Dom__Types.WhatToShow.many({
  hd: Webapi__Dom__Types.WhatToShow._Element,
  tl: {
    hd: Webapi__Dom__Types.WhatToShow._Attribute,
    tl: /* [] */0
  }
}), Webapi__Dom__NodeFilter.make(param => 0));

let el$1 = document.elementFromPoint(0, 0);

if (!(el$1 == null)) {
  console.log(el$1);
}

let elementsFromPoint = document.elementsFromPoint(0, 0);

document.enableStyleSheetsForSet("my-stylesheet-set");

document.exitPointerLock();

let getAnimations = document.getAnimations();

let getElementsByClassName = document.getElementsByClassName("lstlisting");

let getElementsByTagName = document.getElementsByTagName("code");

let getElementsByTagNameNS = document.getElementsByTagNameNS("http://...", "foo");

let hasFocus = document.hasFocus();

let importNode = document.importNode(el);

let importNodeDeep = document.importNode(el, true);

let getElementById = document.getElementById("root");

let querySelector = document.querySelector(".lstlisting");

let querySelectorAll = document.querySelectorAll(".lstlisting");

let pointerLockElement$1 = (pointerLockElement == null) ? undefined : Primitive_option.some(pointerLockElement);

let scrollingElement$1 = (scrollingElement == null) ? undefined : Primitive_option.some(scrollingElement);

let enableStyleSheetsForSet;

let exitPointerLock;

let getElementById$1 = (getElementById == null) ? undefined : Primitive_option.some(getElementById);

let querySelector$1 = (querySelector == null) ? undefined : Primitive_option.some(querySelector);

exports.el = el;
exports.characterSet = characterSet;
exports.compatMode = compatMode;
exports.doctype = doctype;
exports.documentElement = documentElement;
exports.documentURI = documentURI;
exports.hidden = hidden;
exports.implementation = implementation;
exports.lastStyleSheetSet = lastStyleSheetSet;
exports.pointerLockElement = pointerLockElement$1;
exports.preferredStyleSheetSet = preferredStyleSheetSet;
exports.scrollingElement = scrollingElement$1;
exports.selectedStyleSheetSet = selectedStyleSheetSet;
exports.styleSheets = styleSheets;
exports.styleSheetSets = styleSheetSets;
exports.visibilityState = visibilityState;
exports.adoptNode = adoptNode;
exports.createAttribute = createAttribute;
exports.createAttributeNS = createAttributeNS;
exports.createComment = createComment;
exports.createDocumentFragment = createDocumentFragment;
exports.createElement = createElement;
exports.elementWithOptions = elementWithOptions;
exports.elementNS = elementNS;
exports.elementNsWithOptions = elementNsWithOptions;
exports.createEvent = createEvent;
exports.createNodeIterator = createNodeIterator;
exports.createNodeIteratorWithWhatToShow = createNodeIteratorWithWhatToShow;
exports.createNodeIteratorWithWhatToShowFilter = createNodeIteratorWithWhatToShowFilter;
exports.createRange = createRange;
exports.createTextNode = createTextNode;
exports.createTreeWalker = createTreeWalker;
exports.createTreeWalkerWithWhatToShow = createTreeWalkerWithWhatToShow;
exports.createTreeWalkerWithWhatToShowFilter = createTreeWalkerWithWhatToShowFilter;
exports.elementsFromPoint = elementsFromPoint;
exports.enableStyleSheetsForSet = enableStyleSheetsForSet;
exports.exitPointerLock = exitPointerLock;
exports.getAnimations = getAnimations;
exports.getElementsByClassName = getElementsByClassName;
exports.getElementsByTagName = getElementsByTagName;
exports.getElementsByTagNameNS = getElementsByTagNameNS;
exports.hasFocus = hasFocus;
exports.importNode = importNode;
exports.importNodeDeep = importNodeDeep;
exports.getElementById = getElementById$1;
exports.querySelector = querySelector$1;
exports.querySelectorAll = querySelectorAll;
/* el Not a pure module */
