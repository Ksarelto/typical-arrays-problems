
exports.min = function min(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  array.sort((a, b) => { return (a - b) })
  return array[0];
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  array.sort((a, b) => { return (a - b) })
  return array[array.length - 1];
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  var result = array.reduce((res, el) => { return (res += el) })
  return (result / array.length);
}
