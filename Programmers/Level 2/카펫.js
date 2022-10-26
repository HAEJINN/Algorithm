function solution(brown, yellow) {
  var answer = [];

  for (var i = yellow; i > 0; i--) {
    var [w, h] = [i, yellow / i];
    if (!Number.isInteger(h)) continue;

    if (w * 2 + h * 2 + 4 == brown) {
      answer.push(w + 2);
      answer.push(h + 2);
      break;
    }
  }

  return answer;
}
