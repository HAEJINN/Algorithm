function solution(arr) {
  var set = new Set();
  for (var e of arr) {
    set.add(e);
  }
  return Array.from(set);
}

console.log(solution(["good", "time", "good", "time", "student"]));

/*
  set을 Array로 전달하기 위해
  => Array.from(set) : Array.from()함수 사용
  => [...set] : 스프레드 연산자 사용
*/
