function solution(str) {
  return str.split("").filter((e) => e.toUpperCase() === e).length;
}

console.log(solution("KoreaTimeGood"));
