function solution(str) {
  return str.length % 2 == 0
    ? // ? str.slice(str.length / 2 - 1, str.length / 2 + 1)
      // : str.slice(Math.floor(str.length / 2), Math.floor(str.length / 2) + 1);
      str.substr(str.length / 2 - 1, 2)
    : str.substr(Math.floor(str.length / 2), 1);
}

console.log(solution("study"));
console.log(solution("good"));
