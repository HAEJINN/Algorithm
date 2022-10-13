function solution(n) {
  for (var i = 1; ; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
