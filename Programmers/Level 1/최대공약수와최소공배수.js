function solution(n, m) {
  var answer = [];
  let num = 1;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0 && num < i) num = i;
  }
  answer.push(num);
  answer.push(num * (n / num) * (m / num));

  return answer;
}
