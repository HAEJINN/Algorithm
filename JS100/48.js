function solution(str) {
  return str
    .split('')
    .reduce(
      (acc, cur) => (cur.toUpperCase() === cur ? acc + cur.toLowerCase() : acc + cur.toUpperCase()),
      ''
    );
}

console.log(solution('AAABBBcccddd'));
