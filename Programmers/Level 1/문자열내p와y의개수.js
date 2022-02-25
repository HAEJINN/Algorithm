function solution(s) {
  let str = s.toUpperCase();
  let cnt = [0, 0];
  for (x of str.split("")) {
    if (x === "P") cnt[0]++;
    else if (x === "Y") cnt[1]++;
  }
  return cnt[0] === cnt[1];
}
