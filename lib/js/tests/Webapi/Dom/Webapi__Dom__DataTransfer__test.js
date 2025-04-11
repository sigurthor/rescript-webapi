'use strict';


let dataTransfer = new DataTransfer();

let dropEffect = dataTransfer.dropEffect;

dataTransfer.dropEffect = "copy";

let effectAllowed = dataTransfer.effectAllowed;

dataTransfer.effectAllowed = "linkMove";

let items = dataTransfer.items;

dataTransfer.setDragImage(document.createElement("div"), 10, 10);

let types = dataTransfer.types;

let data = dataTransfer.getData("text/plain");

dataTransfer.setData("text/plain", "text");

dataTransfer.clearData("text/plain");

dataTransfer.clearData();

let files = dataTransfer.files;

let dropEffectString = "copy";

let effectAllowedString = "linkMove";

exports.dataTransfer = dataTransfer;
exports.dropEffect = dropEffect;
exports.effectAllowed = effectAllowed;
exports.items = items;
exports.types = types;
exports.data = data;
exports.files = files;
exports.dropEffectString = dropEffectString;
exports.effectAllowedString = effectAllowedString;
/* dataTransfer Not a pure module */
