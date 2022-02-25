function solution(s, n) {
  let answer = "";

  let temp = s.split("");
  for (let x of temp) {
    let charNum = x.charCodeAt(0);
    if (x === " ") {
      answer += " ";
    } else if (charNum >= 97 && charNum <= 122) {
      // 소문자
      charNum + n > 122
        ? (answer += String.fromCharCode(charNum + n - 26))
        : (answer += String.fromCharCode(charNum + n));
    } else {
      // 대문자
      charNum + n > 90
        ? (answer += String.fromCharCode(charNum + n - 26))
        : (answer += String.fromCharCode(charNum + n));
    }
  }

  return answer;
}
/*  
  "".charCodeAt(0) : 아스키코드 찾기
  String.fromCharCode(num) : 아스키코드를 문자로 변환하기
  a: 97, z: 122
  A: 65, Z: 90
*/
