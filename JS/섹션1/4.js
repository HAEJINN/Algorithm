// 1부터 N까지 합 출력하기

function solution(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(6));
console.log(solution(10));
