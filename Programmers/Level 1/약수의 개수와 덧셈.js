function solution(left, right) {
  //     var answer = 0;
  //     var cnt = 0;

  //     for(var i=left; i<=right; i++){
  //         cnt = 0;
  //         for(var j=1; j<=i; j++){
  //             if(i%j == 0) {
  //               cnt++;
  //             }
  //         }
  //        cnt % 2 == 0  ? answer += i : answer -= i;
  //     }

  //     return answer;
  var answer = 0;
  for (var i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (answer -= i) : (answer += i);
  }

  return answer;
}
