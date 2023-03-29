let str = "     I Love India    ";
console.log(str.length)
function remove_spaces(str) {
  // Remove leading spaces
  if (str.charAt(0) === " ") {
    str = str.substring(1);
    return remove_spaces(str);
  }

  // Remove trailing spaces
  if (str.charAt(str.length - 1) === " ") {
    str = str.substring(0, str.length - 1);
    return remove_spaces(str);
  }

  return str;
}

let first_str = remove_spaces(str);

console.log(first_str);
console.log(first_str.length);
