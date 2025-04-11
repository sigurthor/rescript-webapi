'use strict';

let Webapi__Dom__CustomEvent = require("../../../src/Webapi/Dom/Webapi__Dom__CustomEvent.js");

let event = new CustomEvent("my-event");

let bubbles = event.bubbles;

let cancelable = event.cancelable;

let composed = event.composed;

let currentTarget = event.currentTarget;

let defaultPrevented = event.defaultPrevented;

let eventPhase = Webapi__Dom__CustomEvent.eventPhase(event);

let target = event.target;

let timeStamp = event.timeStamp;

let type_ = event.type;

let isTrusted = event.isTrusted;

event.preventDefault();

event.stopImmediatePropagation();

event.stopPropagation();

let Detail = {};

let EventWithDetail = Webapi__Dom__CustomEvent.Make(Detail);

let eventWithDetail = new CustomEvent("event-with-detail");

let eventWithOptions = new CustomEvent("event-with-detail", {
  detail: {
    component: "test-component"
  }
});

let bubbles_withDetail = eventWithDetail.bubbles;

let cancelable_withDetail = eventWithDetail.cancelable;

let composed_withDetail = eventWithDetail.composed;

let currentTarget_withDetail = eventWithDetail.currentTarget;

let defaultPrevented_withDetail = eventWithDetail.defaultPrevented;

let eventPhase_withDetail = EventWithDetail.eventPhase(eventWithDetail);

let target_withDetail = eventWithDetail.target;

let timeStamp_withDetail = eventWithDetail.timeStamp;

let type_withDetail = eventWithDetail.type;

let isTrusted_withDetail = eventWithDetail.isTrusted;

let bubbles_withOptions = eventWithOptions.bubbles;

let cancelable_withOptions = eventWithOptions.cancelable;

let composed_withOptions = eventWithOptions.composed;

let currentTarget_withOptions = eventWithOptions.currentTarget;

let defaultPrevented_withOptions = eventWithOptions.defaultPrevented;

let eventPhase_withOptions = EventWithDetail.eventPhase(eventWithOptions);

let target_withOptions = eventWithOptions.target;

let timeStamp_withOptions = eventWithOptions.timeStamp;

let type__withOptions = eventWithOptions.type;

let isTrusted_withOptions = eventWithOptions.isTrusted;

eventWithDetail.preventDefault();

eventWithDetail.stopImmediatePropagation();

eventWithDetail.stopPropagation();

eventWithOptions.preventDefault();

eventWithOptions.stopImmediatePropagation();

eventWithOptions.stopPropagation();

let component = eventWithDetail.detail.component;

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
exports.Detail = Detail;
exports.EventWithDetail = EventWithDetail;
exports.eventWithDetail = eventWithDetail;
exports.eventWithOptions = eventWithOptions;
exports.bubbles_withDetail = bubbles_withDetail;
exports.cancelable_withDetail = cancelable_withDetail;
exports.composed_withDetail = composed_withDetail;
exports.currentTarget_withDetail = currentTarget_withDetail;
exports.defaultPrevented_withDetail = defaultPrevented_withDetail;
exports.eventPhase_withDetail = eventPhase_withDetail;
exports.target_withDetail = target_withDetail;
exports.timeStamp_withDetail = timeStamp_withDetail;
exports.type_withDetail = type_withDetail;
exports.isTrusted_withDetail = isTrusted_withDetail;
exports.bubbles_withOptions = bubbles_withOptions;
exports.cancelable_withOptions = cancelable_withOptions;
exports.composed_withOptions = composed_withOptions;
exports.currentTarget_withOptions = currentTarget_withOptions;
exports.defaultPrevented_withOptions = defaultPrevented_withOptions;
exports.eventPhase_withOptions = eventPhase_withOptions;
exports.target_withOptions = target_withOptions;
exports.timeStamp_withOptions = timeStamp_withOptions;
exports.type__withOptions = type__withOptions;
exports.isTrusted_withOptions = isTrusted_withOptions;
exports.component = component;
/* event Not a pure module */
