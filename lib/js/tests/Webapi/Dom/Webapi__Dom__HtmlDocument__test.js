'use strict';

let TestHelpers = require("../../testHelpers.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__Types = require("../../../src/Webapi/Dom/Webapi__Dom__Types.js");
let Webapi__Dom__Document = require("../../../src/Webapi/Dom/Webapi__Dom__Document.js");
let Webapi__Dom__NodeFilter = require("../../../src/Webapi/Dom/Webapi__Dom__NodeFilter.js");
let Webapi__Dom__HtmlDocument = require("../../../src/Webapi/Dom/Webapi__Dom__HtmlDocument.js");

let el = document.createElement("strong");

let htmlDocument = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__Document.asHtmlDocument(document));

let e = htmlDocument.activeElement;

if (!(e == null)) {
  console.log(e);
}

let activeElement = htmlDocument.activeElement;

let body = htmlDocument.body;

htmlDocument.body = el;

let cookie = htmlDocument.cookie;

htmlDocument.cookie = "foo=bar;reason=ml";

let defaultView = htmlDocument.defaultView;

let designMode = Webapi__Dom__HtmlDocument.designMode(htmlDocument);

let setDesignMode = Webapi__Dom__HtmlDocument.setDesignMode(htmlDocument, "On");

let dir = Webapi__Dom__HtmlDocument.dir(htmlDocument);

let setDir = Webapi__Dom__HtmlDocument.setDir(htmlDocument, "Ltr");

let domain = htmlDocument.domain;

htmlDocument.domain = "reason.ml";

let embeds = htmlDocument.embeds;

let forms = htmlDocument.forms;

let head = htmlDocument.head;

let images = htmlDocument.images;

let lastModified = htmlDocument.lastModified;

let links = htmlDocument.links;

let location = htmlDocument.location;

htmlDocument.location = "http://reason.ml";

let plugins = htmlDocument.plugins;

let readyState = Webapi__Dom__HtmlDocument.readyState(htmlDocument);

let referrer = htmlDocument.referrer;

let scripts = htmlDocument.scripts;

let title = htmlDocument.title;

htmlDocument.title = "Reason: Rapid Expressive Systems Programming.";

let url = htmlDocument.URL;

htmlDocument.close();

let execCommand = Webapi__Dom__HtmlDocument.execCommand(htmlDocument, "copy", false, undefined);

let getElementsByName = htmlDocument.getElementsByName("angry-joe");

let getSelection = htmlDocument.getSelection();

htmlDocument.open();

let queryCommandEnabled = htmlDocument.queryCommandEnabled("copy");

let queryCommandIndeterm = htmlDocument.queryCommandIndeterm("cut");

let queryCommandSupported = htmlDocument.queryCommandSupported("paste");

let queryCommandValue = htmlDocument.queryCommandValue("fontName");

htmlDocument.write("Hello World!");

htmlDocument.writeln("Hello Newline!");

let characterSet = htmlDocument.characterSet;

let compatMode = Webapi__Dom__HtmlDocument.compatMode(htmlDocument);

let doctype = htmlDocument.doctype;

let documentElement = htmlDocument.documentElement;

let documentURI = htmlDocument.documentURI;

let hidden = htmlDocument.hidden;

let implementation = htmlDocument.implementation;

let lastStyleSheetSet = htmlDocument.lastStyleSheetSet;

let pointerLockElement = htmlDocument.pointerLockElement;

let preferredStyleSheetSet = htmlDocument.preferredStyleSheetSet;

let scrollingElement = htmlDocument.scrollingElement;

let selectedStyleSheetSet = htmlDocument.selectedStyleSheetSet;

htmlDocument.selectedStyleSheetSet = "muh-stylesheet";

let styleSheets = htmlDocument.styleSheets;

let styleSheetSets = htmlDocument.styleSheetSets;

let visibilityState = Webapi__Dom__HtmlDocument.visibilityState(htmlDocument);

let adoptNode = htmlDocument.adoptNode(el);

let createAttribute = htmlDocument.createAttribute("data-foo");

let createAttributeNS = htmlDocument.createAttributeNS("http://...", "foo");

let createComment = htmlDocument.createComment("witty comment");

let createDocumentFragment = htmlDocument.createDocumentFragment();

let createElement = htmlDocument.createElement("div");

let elementWithOptions = htmlDocument.createElement("div", {});

let elementNS = htmlDocument.createElementNS("http://...", "foo");

let elementNsWithOptions = htmlDocument.createElementNS("http://...", "div", {});

let createEvent = htmlDocument.createEvent("MyCustomEvent");

let createNodeIterator = htmlDocument.createNodeIterator(el);

let createNodeIteratorWithWhatToShow = htmlDocument.createNodeIterator(el, Webapi__Dom__Types.WhatToShow._All);

let createNodeIteratorWithWhatToShowFilter = htmlDocument.createNodeIterator(el, Webapi__Dom__Types.WhatToShow.many({
  hd: Webapi__Dom__Types.WhatToShow._Element,
  tl: {
    hd: Webapi__Dom__Types.WhatToShow._Attribute,
    tl: /* [] */0
  }
}), Webapi__Dom__NodeFilter.make(param => 0));

let createRange = htmlDocument.createRange();

let createTextNode = htmlDocument.createTextNode("Very reasonable!");

let createTreeWalker = htmlDocument.createTreeWalker(el);

let createTreeWalkerWithWhatToShow = htmlDocument.createTreeWalker(el, Webapi__Dom__Types.WhatToShow._All);

let createTreeWalkerWithWhatToShowFilter = htmlDocument.createTreeWalker(el, Webapi__Dom__Types.WhatToShow.many({
  hd: Webapi__Dom__Types.WhatToShow._Element,
  tl: {
    hd: Webapi__Dom__Types.WhatToShow._Attribute,
    tl: /* [] */0
  }
}), Webapi__Dom__NodeFilter.make(param => 0));

let el$1 = htmlDocument.elementFromPoint(0, 0);

if (!(el$1 == null)) {
  console.log(el$1);
}

let elementsFromPoint = htmlDocument.elementsFromPoint(0, 0);

htmlDocument.enableStyleSheetsForSet("my-stylesheet-set");

htmlDocument.exitPointerLock();

let getAnimations = htmlDocument.getAnimations();

let getElementsByClassName = htmlDocument.getElementsByClassName("lstlisting");

let getElementsByTagName = htmlDocument.getElementsByTagName("code");

let getElementsByTagNameNS = htmlDocument.getElementsByTagNameNS("http://...", "foo");

let hasFocus = htmlDocument.hasFocus();

let importNode = htmlDocument.importNode(el);

let importNodeDeep = htmlDocument.importNode(el, true);

let getElementById = htmlDocument.getElementById("root");

let querySelector = htmlDocument.querySelector(".lstlisting");

let querySelectorAll = htmlDocument.querySelectorAll(".lstlisting");

let activeElement$1 = (activeElement == null) ? undefined : Primitive_option.some(activeElement);

let body$1 = (body == null) ? undefined : Primitive_option.some(body);

let setBody;

let setCookie;

let defaultView$1 = (defaultView == null) ? undefined : Primitive_option.some(defaultView);

let domain$1 = (domain == null) ? undefined : Primitive_option.some(domain);

let setDomain;

let setLocation;

let setTitle;

let pointerLockElement$1 = (pointerLockElement == null) ? undefined : Primitive_option.some(pointerLockElement);

let scrollingElement$1 = (scrollingElement == null) ? undefined : Primitive_option.some(scrollingElement);

let enableStyleSheetsForSet;

let exitPointerLock;

let getElementById$1 = (getElementById == null) ? undefined : Primitive_option.some(getElementById);

let querySelector$1 = (querySelector == null) ? undefined : Primitive_option.some(querySelector);

exports.el = el;
exports.htmlDocument = htmlDocument;
exports.activeElement = activeElement$1;
exports.body = body$1;
exports.setBody = setBody;
exports.cookie = cookie;
exports.setCookie = setCookie;
exports.defaultView = defaultView$1;
exports.designMode = designMode;
exports.setDesignMode = setDesignMode;
exports.dir = dir;
exports.setDir = setDir;
exports.domain = domain$1;
exports.setDomain = setDomain;
exports.embeds = embeds;
exports.forms = forms;
exports.head = head;
exports.images = images;
exports.lastModified = lastModified;
exports.links = links;
exports.location = location;
exports.setLocation = setLocation;
exports.plugins = plugins;
exports.readyState = readyState;
exports.referrer = referrer;
exports.scripts = scripts;
exports.title = title;
exports.setTitle = setTitle;
exports.url = url;
exports.execCommand = execCommand;
exports.getElementsByName = getElementsByName;
exports.getSelection = getSelection;
exports.queryCommandEnabled = queryCommandEnabled;
exports.queryCommandIndeterm = queryCommandIndeterm;
exports.queryCommandSupported = queryCommandSupported;
exports.queryCommandValue = queryCommandValue;
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
