function solution(str) {
  return str
    .split("")
    .map((e) => e.toUpperCase())
    .join("");
}

console.log(solution("ItisTimeToStudy"));
