function solution(str) {
  return str
    .split("")
    .map((value) => (value == "q" ? "e" : value))
    .join("");
}

console.log(solution("querty"));
console.log(solution("hqllo my namq is hyqwon"));
