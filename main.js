const _ = require("lodash");
const fill = require("./_fill");

let arr = [1, 2, 3];

arr = fill(arr, "3", 0, 1);

console.log(arr);
