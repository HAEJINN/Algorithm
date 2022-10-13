function solution(n) {
  var answer = 0;
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum = 0;
    for (var j = i; j <= n; j++) {
      sum += j;
      if (sum == n) {
        answer++;
        break;
      }
      if (sum > n) break;
    }
  }

  return answer;
}
