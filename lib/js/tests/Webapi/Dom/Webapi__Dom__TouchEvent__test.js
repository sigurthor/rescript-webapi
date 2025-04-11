'use strict';

let Webapi__Dom__TouchEvent = require("../../../src/Webapi/Dom/Webapi__Dom__TouchEvent.js");

let event = new TouchEvent("my-event");

let bubbles = event.bubbles;

let cancelable = event.cancelable;

let composed = event.composed;

let currentTarget = event.currentTarget;

let defaultPrevented = event.defaultPrevented;

let eventPhase = Webapi__Dom__TouchEvent.eventPhase(event);

let target = event.target;

let timeStamp = event.timeStamp;

let type_ = event.type;

let isTrusted = event.isTrusted;

event.preventDefault();

event.stopImmediatePropagation();

event.stopPropagation();

let detail = event.detail;

let view = event.view;

let altKey = event.altKey;

let changedTouches = event.changedTouches;

let ctrlKey = event.ctrlKey;

let metaKey = event.metaKey;

let shiftKey = event.shiftKey;

let targetTouches = event.targetTouches;

let touches = event.touches;

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
exports.altKey = altKey;
exports.changedTouches = changedTouches;
exports.ctrlKey = ctrlKey;
exports.metaKey = metaKey;
exports.shiftKey = shiftKey;
exports.targetTouches = targetTouches;
exports.touches = touches;
/* event Not a pure module */
