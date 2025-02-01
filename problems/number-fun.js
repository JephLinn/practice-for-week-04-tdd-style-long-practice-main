function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n <= 0 || n > 1000000) {
    throw RangeError("Value is out of range!")
  }

  return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};