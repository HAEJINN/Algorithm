// 홀수

function solution(str) {
  var arr = str
    .split(' ')
    .filter((e) => e % 2 == 1)
    .map((e) => parseInt(e))
    .sort((a, b) => a - b);

  var sum = arr.reduce((acc, cur) => acc + cur, 0);

  return sum + '\n' + arr[0];
}

console.log(solution('12 77 38 41 53 92 85'));
