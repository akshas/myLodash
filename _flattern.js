function flattern(array) {
  const newArr = [];

  function recurs(arr) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        recurs(element);
      } else {
        newArr.push(element);
      }
    });
  }
  recurs(array);
  return newArr;
}

module.exports = flattern;
