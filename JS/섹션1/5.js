// 최솟값 구하기

function solution(str) {
  return str
    .split(' ')
    .map((e) => parseInt(e))
    .sort((a, b) => a - b)[0];
}

console.log(solution('5 3 7 11 2 15 17'));
