function fill(arr, val, startPos = 0, endPos = arr.length - 1) {
  let res = arr.map((item, index) => {
    if (index >= startPos && index <= endPos) {
      item = val;
    }
    return item;
  });
  return res;
}
module.exports = fill;
