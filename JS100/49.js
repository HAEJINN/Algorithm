function solution(str) {
  var arr = str.split(' ');
  return arr.reduce((acc, cur) => (parseInt(acc) > parseInt(cur) ? acc : cur));
}

console.log(solution('10 9 8 7 6 5 4 3 2 1'));
