function solution(str) {
  var arr = str.split(" ").map((e) => parseInt(e));

  var ans = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) ans.push(arr[i]);
  }

  return ans.join(" ");
}

console.log(solution("7 3 9 5 6 12"));
