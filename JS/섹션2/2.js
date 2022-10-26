function solution(arr) {
  var ans = 0;
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      ans++;
      max = arr[i];
    }
  }

  return ans;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
