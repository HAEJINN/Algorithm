function solution(str) {
  var [a, b] = str.split(" ");
  console.log(a, b);
  return Math.pow(a, b);
}

console.log(solution("2 3"));
