'use strict';

let Belt_Option = require("rescript/lib/js/Belt_Option.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");

function test_closed(reader) {
  return reader.closed();
}

function test_cancel(reader) {
  return reader.cancel().then(() => Promise.resolve((console.log("cancelled"), undefined)));
}

function test_cancelWith(reader) {
  return reader.cancel("reason").then(reason => Promise.resolve((console.log(reason), undefined)));
}

function test_releaseLock(reader) {
  reader.releaseLock();
}

function test_read(reader) {
  return reader.read().then(next => {
    let __x = Primitive_option.fromNullable(next.value);
    return Promise.resolve(Belt_Option.forEach(__x, prim => {
      console.log(prim);
    }));
  });
}

let DefaultReader__test = {
  test_closed: test_closed,
  test_cancel: test_cancel,
  test_cancelWith: test_cancelWith,
  test_releaseLock: test_releaseLock,
  test_read: test_read
};

function test_locked(stream) {
  return stream.locked;
}

function test_cancel$1(stream) {
  return stream.cancel();
}

function test_cancelWith$1(stream) {
  return stream.cancel("reason");
}

function test_getReader(stream) {
  return stream.getReader();
}

function test_getReaderBYOB(stream) {
  return stream.getReader({"mode": "byob"});
}

function test_tee(stream) {
  let match = stream.tee();
  match[0].cancel();
  match[1].cancel();
}

exports.DefaultReader__test = DefaultReader__test;
exports.test_locked = test_locked;
exports.test_cancel = test_cancel$1;
exports.test_cancelWith = test_cancelWith$1;
exports.test_getReader = test_getReader;
exports.test_getReaderBYOB = test_getReaderBYOB;
exports.test_tee = test_tee;
/* No side effect */
