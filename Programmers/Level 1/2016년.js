function solution(a, b) {
  let day = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let yo = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  let sum = -1; // 1월 1일은 빼고 시작
  // 월 더하기
  for (let i = 1; i < a; i++) {
    sum += day[i];
  }
  // 일 더하기
  sum += b;

  return yo[sum % 7];
}
