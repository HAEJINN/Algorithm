function solution(x) {
  let sum = 0,
    copy = x;
  while (copy >= 10) {
    sum += copy % 10;
    copy = parseInt(copy / 10);
  }
  sum += copy;

  return x % sum === 0;
}
