'use strict';

let Webapi__Dom__WheelEvent = require("../../../src/Webapi/Dom/Webapi__Dom__WheelEvent.js");

let event = new WheelEvent("my-event");

let bubbles = event.bubbles;

let cancelable = event.cancelable;

let composed = event.composed;

let currentTarget = event.currentTarget;

let defaultPrevented = event.defaultPrevented;

let eventPhase = Webapi__Dom__WheelEvent.eventPhase(event);

let target = event.target;

let timeStamp = event.timeStamp;

let type_ = event.type;

let isTrusted = event.isTrusted;

event.preventDefault();

event.stopImmediatePropagation();

event.stopPropagation();

let detail = event.detail;

let view = event.view;

let clientX = event.clientX;

let deltaX = event.deltaX;

let deltaY = event.deltaY;

let deltaZ = event.deltaZ;

let deltaMode = Webapi__Dom__WheelEvent.deltaMode(event);

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
exports.clientX = clientX;
exports.deltaX = deltaX;
exports.deltaY = deltaY;
exports.deltaZ = deltaZ;
exports.deltaMode = deltaMode;
/* event Not a pure module */
