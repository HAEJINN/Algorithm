function solution(str, word) {
  return str.indexOf(word);
}

console.log(solution("pineapple is yummy", "apple"));

/*
  indexOf()
  호출한 스트링 객체나 배열에서 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환.
  존재하지 않는다면 -1을 반환
*/
