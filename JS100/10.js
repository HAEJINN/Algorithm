function solution(num) {
  var sol = "";
  for (var i = 1; i <= num; i++) {
    var star = "";
    for (var j = 0; j < num - i; j++) {
      star += " ";
    }
    for (var j = 1; j <= i * 2 - 1; j++) {
      star += "*";
    }
    sol += star + "\n";
  }
  return sol;
}

console.log(solution(5));
