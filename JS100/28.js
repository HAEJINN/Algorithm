function solution(str) {
  var arr = str.split("");
  var ans = "";
  for (var i = 0; i < arr.length - 1; i++) {
    ans += arr[i] + " " + arr[i + 1];
    if (i != arr.length - 2) {
      ans += "\n";
    }
  }
  return ans;
}

console.log(solution("Javascript"));
