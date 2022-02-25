function solution(lottos, win_nums) {
  var answer = [6, 6, 5, 4, 3, 2, 1];

  let zero = 0;
  let same = 0;
  for (let num of lottos) {
    if (num === 0) zero++;
    else if (win_nums.includes(num)) same++;
  }

  return [answer[same + zero], answer[same]];
}
