function solution(n) {
  let temp = Math.sqrt(n);
  let ans = Number.isInteger(temp) ? Math.pow(temp + 1, 2) : -1;

  return ans;
}
