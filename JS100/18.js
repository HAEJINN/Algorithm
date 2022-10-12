function solution(arr) {
  return Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
}

console.log(solution([20, 30, 40]));

/*
  올림 : Math.ceil
  버림 : Math.floor
  반올림 : Math.round
*/
