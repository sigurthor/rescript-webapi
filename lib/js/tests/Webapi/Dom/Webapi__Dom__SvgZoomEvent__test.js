'use strict';

let Webapi__Dom__SvgZoomEvent = require("../../../src/Webapi/Dom/Webapi__Dom__SvgZoomEvent.js");

let event = new SVGZoomEvent("my-event");

let bubbles = event.bubbles;

let cancelable = event.cancelable;

let composed = event.composed;

let currentTarget = event.currentTarget;

let defaultPrevented = event.defaultPrevented;

let eventPhase = Webapi__Dom__SvgZoomEvent.eventPhase(event);

let target = event.target;

let timeStamp = event.timeStamp;

let type_ = event.type;

let isTrusted = event.isTrusted;

event.preventDefault();

event.stopImmediatePropagation();

event.stopPropagation();

let detail = event.detail;

let view = event.view;

let zoomRectScreen = event.zoomRectScreen;

let previousScale = event.previousScale;

let previousTranslate = event.previousTranslate;

let newScale = event.newScale;

let newTranslate = event.newTranslate;

exports.event = event;
exports.bubbles = bubbles;
exports.cancelable = cancelable;
exports.composed = composed;
exports.currentTarget = currentTarget;
exports.defaultPrevented = defaultPrevented;
exports.eventPhase = eventPhase;
exports.target = target;
exports.timeStamp = timeStamp;
exports.type_ = type_;
exports.isTrusted = isTrusted;
exports.detail = detail;
exports.view = view;
exports.zoomRectScreen = zoomRectScreen;
exports.previousScale = previousScale;
exports.previousTranslate = previousTranslate;
exports.newScale = newScale;
exports.newTranslate = newTranslate;
/* event Not a pure module */
