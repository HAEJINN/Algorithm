function solution(num) {
  for (var i = 2; i < num; i++) {
    if (num % 2 === 0) {
      return "NO";
    }
  }
  return "YES";
}

console.log(solution(3));
console.log(solution(4));
