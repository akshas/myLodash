// let arr = [1, 2, 3];
// arr = fill(arr, "3", 0, 1);

function fill(arr, val, startPos = 0, endPos = arr.length - 1) {
  let res = arr.map(getGap);
  function getGap(item, index) {
    if (index >= startPos && index <= endPos) {
      item = val;
    }
    return item;
  }
  return res;
}
module.exports = fill;
