module.exports = function reverseString(string) {
  // if (typeof string !== "String") {
  //   throw TypeError("TypeError: Not a String")
  // }
  
  let reversed = ""

  for (i = string.length -1; i >= 0; i--) {
    let char = string[i];

    reversed += char
  }

  return reversed
};