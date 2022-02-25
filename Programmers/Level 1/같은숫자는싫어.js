function solution(arr) {
  let cur = arr[0];
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == cur) continue;
    else {
      answer.push(arr[i]);
      cur = arr[i];
    }
  }
  return answer;
}
