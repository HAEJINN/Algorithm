function solution(arr, divisor) {
  let temp = arr.filter((num) => num % divisor === 0);
  temp.sort((a, b) => a - b);

  return temp.length === 0 ? [-1] : temp;
}
