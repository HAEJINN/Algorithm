function solution(start, end) {
  var str = "";
  for (var i = start; i <= end; i++) {
    str += i.toString().split("").join("");
  }
  return str.split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution(1, 20));
console.log(solution(10, 15));
