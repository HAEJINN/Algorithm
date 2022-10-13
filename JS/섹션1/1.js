// 세 수 중 최소값

function solution(str) {
  return str.split(' ').reduce((acc, cur) => (parseInt(acc) > parseInt(cur) ? cur : acc));
}

console.log(solution('6 5 11'));
