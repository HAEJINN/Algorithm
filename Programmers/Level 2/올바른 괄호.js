function solution(s) {
  var ans = 0;

  for (var i of s) {
    ans += i == '(' ? 1 : -1;
    if (ans < 0) return false;
  }

  return ans == 0 ? true : false;
}
