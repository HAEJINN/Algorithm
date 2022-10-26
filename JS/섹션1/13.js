function solution(str) {
  return str
    .split("")
    .map((e) => (e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase()))
    .join("");
}

console.log(solution("StuDY"));
