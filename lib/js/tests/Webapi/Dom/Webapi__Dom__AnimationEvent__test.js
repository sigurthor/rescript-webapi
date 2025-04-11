'use strict';

let Webapi__Dom__AnimationEvent = require("../../../src/Webapi/Dom/Webapi__Dom__AnimationEvent.js");

let event = new AnimationEvent("my-event");

let bubbles = event.bubbles;

let cancelable = event.cancelable;

let composed = event.composed;

let currentTarget = event.currentTarget;

let defaultPrevented = event.defaultPrevented;

let eventPhase = Webapi__Dom__AnimationEvent.eventPhase(event);

let target = event.target;

let timeStamp = event.timeStamp;

let type_ = event.type;

let isTrusted = event.isTrusted;

event.preventDefault();

event.stopImmediatePropagation();

event.stopPropagation();

let animationName = event.animationName;

let elapsedTime = event.elapsedTime;

let pseudoElement = event.pseudoElement;

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
exports.animationName = animationName;
exports.elapsedTime = elapsedTime;
exports.pseudoElement = pseudoElement;
/* event Not a pure module */
