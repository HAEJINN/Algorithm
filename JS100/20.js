function solution(str) {
  var [a, b] = str.split(" ");
  return Math.floor(a / b) + " " + (a % b);
}

console.log(solution("11 2"));
