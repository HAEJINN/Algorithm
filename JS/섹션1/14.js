function solution(n, arr) {
  return arr.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
}

console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));
