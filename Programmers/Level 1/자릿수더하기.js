function solution(n) {
  let temp = (n + "").split("");

  return temp.reduce((prev, curr) => prev + parseInt(curr), 0);
}
