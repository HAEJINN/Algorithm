function solution(absolutes, signs) {
  var answer = 0;
  for (var i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer += -1 * absolutes[i]);
  }
  return answer;
}
