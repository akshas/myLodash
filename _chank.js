// let ch = _.chunk(["a", "b", "c", "d"], 2);

function ch(arr, num) {
  let bigArr = [];

  let smallArr = [];
  arr.forEach((item, index) => {
    smallArr.push(item);
    if (smallArr.length == num || index == arr.length - 1) {
      bigArr.push(smallArr);
      smallArr = [];
    }
  });
  return bigArr;
}

module.exports = ch;
