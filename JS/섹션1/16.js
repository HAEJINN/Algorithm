function solution(str) {
  var ans = "";
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (!ans.includes(arr[i])) ans += arr[i];
  }

  return ans;
}

console.log(solution("ksekkset"));
