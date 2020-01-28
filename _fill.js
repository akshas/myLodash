function fill(arr, val, startPos = 0, endPos = arr.length - 1) {

    arr.splice(startPos, endPos, val)
    return arr;
}

module.exports = fill;