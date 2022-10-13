// 삼각형 판별하기

function solution(str) {
  var arr = str.split(' ').sort((a, b) => a - b);
  return parseInt(arr[2]) < parseInt(arr[0]) + parseInt(arr[1]) ? 'YES' : 'NO';
}

console.log(solution('6 7 11'));
console.log(solution('13 33 17'));
