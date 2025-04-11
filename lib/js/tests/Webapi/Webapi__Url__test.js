'use strict';


let params = new URLSearchParams("key1=value1&key2=value2");

params.forEach((prim0, prim1) => {
  console.log(prim0, prim1);
});

let test_entries = Array.from(params.entries());

exports.params = params;
exports.test_entries = test_entries;
/* params Not a pure module */
