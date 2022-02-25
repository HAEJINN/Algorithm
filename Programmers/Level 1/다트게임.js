function solution(dartResult) {
  let answer = [0, 0, 0];
  let temp = 0;
  let idx = 0;

  let dart_result = dartResult.split("");
  for (let dart_res of dart_result) {
    if (dart_res == parseInt(dart_res)) {
      // 숫자이면
      answer[idx] = temp;
      temp = dart_res;
      idx++;
    } else {
      if (dart_res == "S") Math.pow(temp, 1);
      else if (dart_res == "D") Math.pow(temp, 2);
      else if (dart_res == "T") Math.pow(temp, 3);
      else if (dart_res == "*") {
        answer[idx] = answer[idx] * 2;
        if (idx - 1 < 0) answer[idx - 1] = answer[idx - 1] * 2;
      } else if (dart_res == "#") answer[idx] = answer[idx] * -1;
    }
  }
  console.log(answer);
  // return answer.reduce((prev, curr)=>prev+curr, 0);
  return true;
}
