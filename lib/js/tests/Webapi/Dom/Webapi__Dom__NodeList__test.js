'use strict';


let items = document.querySelectorAll(".item");

items.forEach((item, param) => {
  console.log(item);
});

exports.items = items;
/* items Not a pure module */
