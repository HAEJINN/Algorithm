function solution(price, money, count) {
  var sum = 0;

  for (var i = 1; i <= count; i++) {
    sum += i * price;
  }

  return sum > money ? sum - money : 0;
}
