const difference = (mainArr, comparingArr) => {
  if (Array.isArray(mainArr) && Array.isArray(comparingArr)) {
    let newArr = [];
    mainArr.forEach(item => {
      comparingArr.indexOf(item) == -1 ? newArr.push(item) : "";
    });
    return newArr;
  } else {
    console.log("должно быть 2 массива");
  }
};

module.exports = difference;
