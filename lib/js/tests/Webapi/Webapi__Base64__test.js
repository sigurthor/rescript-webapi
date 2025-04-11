'use strict';


let binary = atob("foo");

let ascii = btoa("gibberish");

exports.binary = binary;
exports.ascii = ascii;
/* binary Not a pure module */
