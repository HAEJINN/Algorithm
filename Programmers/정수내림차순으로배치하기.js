function solution(n) {
  let temp = (n + "").split("").sort().reverse().join("");

  return temp * 1;
}
