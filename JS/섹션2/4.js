function solution(arr) {
  var ans = 0;
  var score = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      score = 1;
    } else {
      ans += score;
      score++;
    }
  }
  return ans;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
