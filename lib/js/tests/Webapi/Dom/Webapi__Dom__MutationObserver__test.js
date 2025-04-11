'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");

let el = document.createElement("strong");

let observer = new MutationObserver((_records, _observer) => {});

observer.observe(el, {
  subtree: true,
  childList: true,
  attributes: true,
  attributeOldValue: true,
  characterData: true,
  characterDataOldValue: true
});

observer.disconnect();

let records = observer.takeRecords();

let aRecord = records[0];

let recordType = aRecord.type;

let recordTarget = aRecord.target;

let recordAddedNodes = aRecord.addedNodes;

let recordRemovedNodes = aRecord.removedNodes;

let recordPrevSibling = aRecord.previousSibling;

let recordNextSibling = aRecord.nextSibling;

let recordAttributeName = aRecord.attributeName;

let recordAttributeNamespace = aRecord.attributeNamespace;

let recordOldValue = aRecord.oldValue;

let recordPrevSibling$1 = (recordPrevSibling == null) ? undefined : Primitive_option.some(recordPrevSibling);

let recordNextSibling$1 = (recordNextSibling == null) ? undefined : Primitive_option.some(recordNextSibling);

let recordAttributeName$1 = (recordAttributeName == null) ? undefined : Primitive_option.some(recordAttributeName);

let recordAttributeNamespace$1 = (recordAttributeNamespace == null) ? undefined : Primitive_option.some(recordAttributeNamespace);

let recordOldValue$1 = (recordOldValue == null) ? undefined : Primitive_option.some(recordOldValue);

exports.el = el;
exports.observer = observer;
exports.records = records;
exports.aRecord = aRecord;
exports.recordType = recordType;
exports.recordTarget = recordTarget;
exports.recordAddedNodes = recordAddedNodes;
exports.recordRemovedNodes = recordRemovedNodes;
exports.recordPrevSibling = recordPrevSibling$1;
exports.recordNextSibling = recordNextSibling$1;
exports.recordAttributeName = recordAttributeName$1;
exports.recordAttributeNamespace = recordAttributeNamespace$1;
exports.recordOldValue = recordOldValue$1;
/* el Not a pure module */
