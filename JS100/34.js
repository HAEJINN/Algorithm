function solution1(str) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "NO";
    }
  }
  return "YES";
}

function solution2(str) {
  var arr = str
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");
  if (arr === str) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(solution1("176 156 155 165 166 169"));
console.log(solution2("176 156 155 165 166 169"));
console.log(solution1("155 156 165 166 169 176"));
console.log(solution2("155 156 165 166 169 176"));
