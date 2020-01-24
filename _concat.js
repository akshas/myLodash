function _concat(array, ...args) {
  let newArr = [].concat(array);
   args.forEach(item => {
    if (!Array.isArray(item)) {
      newArr.push(item);
    } else {
      item.forEach(it => {
        newArr.push(it);
      })
    }
  });
  return newArr;
}


module.exports = _concat;
