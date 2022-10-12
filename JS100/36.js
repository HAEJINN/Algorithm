function solution(num) {
  var ans = [];
  for (var i = 1; i <= 9; i++) {
    ans.push(i * num);
  }
  return ans.join(" ");
}

console.log(solution(2));
