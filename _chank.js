// let ch = _.chunk(["a", "b", "c", "d"], 2);

function ch(arr, num) {
  let commonArr = [];

  let smallArr = [];
  arr.forEach((item, index) => {
    smallArr.push(item);
    if (smallArr.length == num || index == arr.length - 1) {
      commonArr.push(smallArr);
      smallArr = [];
    }
  });
  return commonArr;
}

module.exports = ch;