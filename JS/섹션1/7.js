// 10부제

function solution(num, arr) {
  return arr.filter((e) => e % 10 == num).length;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
