function solution(n) {
  var arr = [0, 1];

  for (var i = 2; ; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
    if (i == n) break;
  }
  return arr[arr.length - 1];
}
