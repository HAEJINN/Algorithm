function solution1(a, b) {
  var day = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var week = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];

  var sum = b;
  for (var i = 1; i < a; i++) {
    sum += day[i];
  }

  return week[(sum % 7) - 1];
}

function solution2(a, b) {
  var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date("2020-" + a + "-" + b);
  return week[date.getDay()];
}

console.log(solution1(1, 1));
console.log(solution2(1, 1));
console.log(solution1(5, 24));
console.log(solution2(5, 24));
