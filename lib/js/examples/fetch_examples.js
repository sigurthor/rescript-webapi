'use strict';

let Js_json = require("rescript/lib/js/Js_json.js");
let Belt_Option = require("rescript/lib/js/Belt_Option.js");
let Webapi__Fetch = require("../src/Webapi/Webapi__Fetch.js");
let Primitive_option = require("rescript/lib/js/Primitive_option.js");

fetch("/api/hellos/1").then(prim => prim.text()).then(text => Promise.resolve((console.log(text), undefined)));

fetch("/api/hello", Webapi__Fetch.RequestInit.make("Post", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)).then(prim => prim.text()).then(text => Promise.resolve((console.log(text), undefined)));

fetch("/api/fruit").then(prim => prim.json()).then(json => Promise.resolve(Js_json.decodeArray(json))).then(opt => Promise.resolve(Belt_Option.getExn(opt))).then(items => Promise.resolve(items.map(item => Belt_Option.getExn(Js_json.decodeString(item)))));

let payload = {};

payload["hello"] = "world";

fetch("/api/hello", Webapi__Fetch.RequestInit.make("Post", {
  "Content-Type": "application/json"
}, Primitive_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)).then(prim => prim.json());

let formData = new FormData();

formData.append("image0", {
  type: "image/jpg",
  uri: "path/to/it",
  name: "image0.jpg"
}, undefined);

fetch("/api/upload", Webapi__Fetch.RequestInit.make("Post", {
  Accept: "*"
}, Primitive_option.some(formData), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)).then(prim => prim.json());

let controller = new AbortController();

fetch("/api/fruit", Webapi__Fetch.RequestInit.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Primitive_option.some(controller.signal), undefined));

controller.abort();

/*  Not a pure module */
