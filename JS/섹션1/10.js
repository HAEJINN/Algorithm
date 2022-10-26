function solution(str, a) {
  return str.split("").filter((e) => e === a).length;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
