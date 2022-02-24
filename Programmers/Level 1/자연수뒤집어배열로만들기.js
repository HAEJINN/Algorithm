function solution(n) {
  let temp = (n + "").split("").reverse();

  return temp.map((s) => s * 1);
}
