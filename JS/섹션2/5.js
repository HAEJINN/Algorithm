function solution(arr) {
  var sortedArr = [...arr].sort((a, b) => b - a);
  var ans = [];

  for (var i = 0; i < arr.length; i++) {
    ans.push(sortedArr.indexOf(arr[i]) + 1);
  }
  return ans;
}

console.log(solution([87, 89, 92, 100, 76]));
