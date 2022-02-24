function solution(arr) {
  // 풀이 1
  // if(arr.length === 1)
  //     return [-1];
  // else {
  //     let idx = 0;
  //     for (let i = 1; i < arr.length; i++) {
  //         if(arr[i] < arr[idx]) {
  //             idx=i;
  //         }
  //     }
  //     arr.splice(idx,1);
  //     return arr;
  // }

  // 풀이2
  if (arr.length === 1) return [-1];
  else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
  }
}
