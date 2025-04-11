'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__Element = require("../../../src/Webapi/Dom/Webapi__Dom__Element.js");

let el = document.createElement("strong");

let el2 = document.createElement("small");

let event = new PointerEvent("my-event");

let assignedSlot = el.assignedSlot;

let attributes = el.attributes;

let classList = el.classList;

let className = el.className;

el.className = "my-class-name";

let clientHeight = el.clientHeight;

let clientLeft = el.clientLeft;

let clientTop = el.clientTop;

let clientWidth = el.clientWidth;

let id = el.id;

el.id = "my-id";

let innerHTML = el.innerHTML;

el.innerHTML = "<strong>stuff</strong>";

let localName = el.localName;

let namespaceURI = el.namespaceURI;

let nextElementSibling = el.nextElementSibling;

let outerHTML = el.outerHTML;

el.outerHTML = "<strong>stuff</strong>";

let prefix = el.prefix;

let previousElementSibling = el.previousElementSibling;

let scrollHeight = el.scrollHeight;

let scrollLeft = el.scrollLeft;

el.scrollLeft = 0.0;

let scrollTop = el.scrollTop;

el.scrollTop = 0.0;

let scrollWidth = el.scrollWidth;

let shadowRoot = el.shadowRoot;

let slot = el.slot;

el.slot = "<strong>stuff</strong>";

let tagName = el.tagName;

let attachShadow = el.attachShadow({
  mode: "open"
});

let attachShadowOpen = el.attachShadow({ "mode": "open" });

let attachShadowClosed = el.attachShadow({ "mode": "closed" });

let animate = el.animate({
  transform: "translateT(0px)"
}, {
  duration: 1000
});

let closest = el.closest("input");

let getAttribute = el.getAttribute("href");

let getAttributeNS = el.getAttributeNS("http://...", "foo");

let getBoundingClientRect = el.getBoundingClientRect();

let clientRects = el.getClientRects();

let getClientRectsItem = el.getClientRects().item(0);

let getClientRectsArray = Array.prototype.slice.call(el.getClientRects());

let getElementsByClassName = el.getElementsByClassName("some-class-name");

let getElementsByTagName = el.getElementsByTagName("pre");

let getElementsByTagNameNS = el.getElementsByTagNameNS("http://...", "td");

let hasAttribute = el.hasAttribute("data-my-value");

let hasAttributeNS = el.hasAttributeNS("http://...", "foo");

let hasAttributes = el.hasAttributes();

let insertAdjacentElement = Webapi__Dom__Element.insertAdjacentElement(el, "BeforeBegin", el2);

let insertAdjacentHTML = Webapi__Dom__Element.insertAdjacentHTML(el, "AfterBegin", "<strong>text</strong>");

let insertAdjacentText = Webapi__Dom__Element.insertAdjacentText(el, "AfterEnd", "text");

let matches = el.matches("input");

let querySelector = el.querySelector("input");

let querySelectorAll = el.querySelectorAll("input");

el.releasePointerCapture(event.pointerId);

el.remove();

el.removeAttribute("href");

el.removeAttributeNS("http://...", "foo");

el.requestFullscreen();

el.requestPointerLock();

el.scrollIntoView();

el.scrollIntoView(true);

el.scrollIntoView({
  block: "end",
  behavior: "smooth"
});

el.setAttribute("href", "http://...");

el.setAttributeNS("http://...", "foo", "bar");

el.setPointerCapture(event.pointerId);

let assignedSlot$1 = (assignedSlot == null) ? undefined : Primitive_option.some(assignedSlot);

let setClassName;

let setId;

let setInnerHTML;

let namespaceURI$1 = (namespaceURI == null) ? undefined : Primitive_option.some(namespaceURI);

let nextElementSibling$1 = (nextElementSibling == null) ? undefined : Primitive_option.some(nextElementSibling);

let setOuterHTML;

let prefix$1 = (prefix == null) ? undefined : Primitive_option.some(prefix);

let previousElementSibling$1 = (previousElementSibling == null) ? undefined : Primitive_option.some(previousElementSibling);

let setScrollLeft;

let setScrollTop;

let setSlot;

let closest$1 = (closest == null) ? undefined : Primitive_option.some(closest);

let getAttribute$1 = (getAttribute == null) ? undefined : Primitive_option.some(getAttribute);

let getAttributeNS$1 = (getAttributeNS == null) ? undefined : Primitive_option.some(getAttributeNS);

let getClientRectsItem$1 = (getClientRectsItem == null) ? undefined : Primitive_option.some(getClientRectsItem);

let querySelector$1 = (querySelector == null) ? undefined : Primitive_option.some(querySelector);

let releasePointerCapture;

let remove;

let removeAttribute;

let removeAttributeNS;

let requestFullscreen;

let requestPointerLock;

let scrollIntoView;

let scrollIntoViewNoAlignToTop;

let scrollIntoViewWithOptions;

let setAttribute;

let setAttributeNS;

let setPointerCapture;

exports.el = el;
exports.el2 = el2;
exports.event = event;
exports.assignedSlot = assignedSlot$1;
exports.attributes = attributes;
exports.classList = classList;
exports.className = className;
exports.setClassName = setClassName;
exports.clientHeight = clientHeight;
exports.clientLeft = clientLeft;
exports.clientTop = clientTop;
exports.clientWidth = clientWidth;
exports.id = id;
exports.setId = setId;
exports.innerHTML = innerHTML;
exports.setInnerHTML = setInnerHTML;
exports.localName = localName;
exports.namespaceURI = namespaceURI$1;
exports.nextElementSibling = nextElementSibling$1;
exports.outerHTML = outerHTML;
exports.setOuterHTML = setOuterHTML;
exports.prefix = prefix$1;
exports.previousElementSibling = previousElementSibling$1;
exports.scrollHeight = scrollHeight;
exports.scrollLeft = scrollLeft;
exports.setScrollLeft = setScrollLeft;
exports.scrollTop = scrollTop;
exports.setScrollTop = setScrollTop;
exports.scrollWidth = scrollWidth;
exports.shadowRoot = shadowRoot;
exports.slot = slot;
exports.setSlot = setSlot;
exports.tagName = tagName;
exports.attachShadow = attachShadow;
exports.attachShadowOpen = attachShadowOpen;
exports.attachShadowClosed = attachShadowClosed;
exports.animate = animate;
exports.closest = closest$1;
exports.getAttribute = getAttribute$1;
exports.getAttributeNS = getAttributeNS$1;
exports.getBoundingClientRect = getBoundingClientRect;
exports.clientRects = clientRects;
exports.getClientRectsItem = getClientRectsItem$1;
exports.getClientRectsArray = getClientRectsArray;
exports.getElementsByClassName = getElementsByClassName;
exports.getElementsByTagName = getElementsByTagName;
exports.getElementsByTagNameNS = getElementsByTagNameNS;
exports.hasAttribute = hasAttribute;
exports.hasAttributeNS = hasAttributeNS;
exports.hasAttributes = hasAttributes;
exports.insertAdjacentElement = insertAdjacentElement;
exports.insertAdjacentHTML = insertAdjacentHTML;
exports.insertAdjacentText = insertAdjacentText;
exports.matches = matches;
exports.querySelector = querySelector$1;
exports.querySelectorAll = querySelectorAll;
exports.releasePointerCapture = releasePointerCapture;
exports.remove = remove;
exports.removeAttribute = removeAttribute;
exports.removeAttributeNS = removeAttributeNS;
exports.requestFullscreen = requestFullscreen;
exports.requestPointerLock = requestPointerLock;
exports.scrollIntoView = scrollIntoView;
exports.scrollIntoViewNoAlignToTop = scrollIntoViewNoAlignToTop;
exports.scrollIntoViewWithOptions = scrollIntoViewWithOptions;
exports.setAttribute = setAttribute;
exports.setAttributeNS = setAttributeNS;
exports.setPointerCapture = setPointerCapture;
/* el Not a pure module */
