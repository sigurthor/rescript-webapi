'use strict';


let test_file = new File(["hello"], "hello.txt");

let test_lastModified = test_file.lastModified;

let test_name = test_file.name;

let test_filePropertyBag = {
  endings: "transparent",
  type: "text/plain",
  lastModified: 123.0
};

let test_filePropertyBagNone = {};

let test_makeWithOptions = new File(["hello"], "hello.txt", {
  type: "text/plain"
});

exports.test_file = test_file;
exports.test_lastModified = test_lastModified;
exports.test_name = test_name;
exports.test_filePropertyBag = test_filePropertyBag;
exports.test_filePropertyBagNone = test_filePropertyBagNone;
exports.test_makeWithOptions = test_makeWithOptions;
/* test_file Not a pure module */
