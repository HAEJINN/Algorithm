function solution(str) {
  var set = new Set([...str.split(" ")]);

  var num = [...set].sort((a, b) => b - a)[2];
  return str.split(" ").filter((e) => e >= num).length;
}

console.log(solution("97 86 75 66 55 97 85 97 97 95"));
