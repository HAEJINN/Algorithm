function solution(n) {
  var answer = 0;

  for (var i = n + 1; ; i++) {
    if (
      n
        .toString(2)
        .split('')
        .filter((e) => e == 1).length ==
      i
        .toString(2)
        .split('')
        .filter((e) => e == 1).length
    ) {
      answer = i;
      break;
    }
  }
  return answer;
}
