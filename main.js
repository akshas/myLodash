// const _ = require("lodash");
const fl = require("./_flattern");

const ar = [1, 2, [3, [4, 5, [6]]]];

const res = fl(ar);
console.log(res);
