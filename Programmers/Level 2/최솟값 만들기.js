function solution(A, B) {
  var answer = 0;
  A.sort((x, y) => x - y);
  B.sort((x, y) => y - x);

  for (var i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
