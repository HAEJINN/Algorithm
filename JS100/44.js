function solution(str) {
  return str.split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution("18234"));
console.log(solution("3849"));
