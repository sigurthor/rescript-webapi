'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");
let Webapi__Dom__DragEvent = require("../../../src/Webapi/Dom/Webapi__Dom__DragEvent.js");

let event = new DragEvent("my-event");

let bubbles = event.bubbles;

let cancelable = event.cancelable;

let composed = event.composed;

let currentTarget = event.currentTarget;

let defaultPrevented = event.defaultPrevented;

let eventPhase = Webapi__Dom__DragEvent.eventPhase(event);

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

let button = event.button;

let buttons = event.buttons;

let clientX = event.clientX;

let clientY = event.clientY;

let ctrlKey = event.ctrlKey;

let metaKey = event.metaKey;

let movementX = event.movementX;

let movementY = event.movementY;

let offsetX = event.offsetX;

let offsetY = event.offsetY;

let pageX = event.pageX;

let pageY = event.pageY;

let region = event.region;

let relatedTarget = event.relatedTarget;

let screenX = event.screenX;

let screenY = event.screenY;

let shiftKey = event.shiftKey;

let x = event.x;

let y = event.y;

let getModifierState = Webapi__Dom__DragEvent.getModifierState(event, "Alt");

let dataTransfer = event.dataTransfer;

let region$1 = (region == null) ? undefined : Primitive_option.some(region);

let relatedTarget$1 = (relatedTarget == null) ? undefined : Primitive_option.some(relatedTarget);

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
exports.button = button;
exports.buttons = buttons;
exports.clientX = clientX;
exports.clientY = clientY;
exports.ctrlKey = ctrlKey;
exports.metaKey = metaKey;
exports.movementX = movementX;
exports.movementY = movementY;
exports.offsetX = offsetX;
exports.offsetY = offsetY;
exports.pageX = pageX;
exports.pageY = pageY;
exports.region = region$1;
exports.relatedTarget = relatedTarget$1;
exports.screenX = screenX;
exports.screenY = screenY;
exports.shiftKey = shiftKey;
exports.x = x;
exports.y = y;
exports.getModifierState = getModifierState;
exports.dataTransfer = dataTransfer;
/* event Not a pure module */
