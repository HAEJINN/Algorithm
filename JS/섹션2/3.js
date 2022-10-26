function solution(arrA, arrB) {
  // 가위 1, 바위 2, 보 3
  var ans = [];
  for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] === arrB[i]) {
      ans.push("D");
    } else if (
      (arrA[i] === 1 && arrB[i] === 3) ||
      (arrA[i] === 2 && arrB[i] === 1) ||
      (arrA[i] === 3 && arrB[i] === 2)
    ) {
      ans.push("A");
    } else {
      ans.push("B");
    }
  }
  return ans;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
