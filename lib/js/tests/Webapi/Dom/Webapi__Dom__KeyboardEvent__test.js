'use strict';

let Webapi__Dom__KeyboardEvent = require("../../../src/Webapi/Dom/Webapi__Dom__KeyboardEvent.js");

let event = new KeyboardEvent("my-event");

let bubbles = event.bubbles;

let cancelable = event.cancelable;

let composed = event.composed;

let currentTarget = event.currentTarget;

let defaultPrevented = event.defaultPrevented;

let eventPhase = Webapi__Dom__KeyboardEvent.eventPhase(event);

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

let code = event.code;

let ctrlKey = event.ctrlKey;

let isComposing = event.isComposing;

let key = event.key;

let locale = event.locale;

let location = event.location;

let metaKey = event.metaKey;

let repeat = event.repeat;

let shiftKey = event.shiftKey;

let getModifierState = Webapi__Dom__KeyboardEvent.getModifierState(event, "Alt");

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
exports.code = code;
exports.ctrlKey = ctrlKey;
exports.isComposing = isComposing;
exports.key = key;
exports.locale = locale;
exports.location = location;
exports.metaKey = metaKey;
exports.repeat = repeat;
exports.shiftKey = shiftKey;
exports.getModifierState = getModifierState;
/* event Not a pure module */
