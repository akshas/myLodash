// const _ = require("lodash");
const difference = require("./_difference");

let list = [3, 10, 4, 5, 6];
let list2 = [3, 7, 5, 3, 1];

let list3 = difference(list, list2);

console.log(list3);
