function solution(str) {
  return str
    .split("")
    .map((e) => (e === "A" ? "#" : e))
    .join("");
}

console.log(solution("BANANA"));
