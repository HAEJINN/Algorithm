var maxWeight = 50;
var friend = 5;
var weight = [20, 20, 20, 20, 20];

var ans = 0;
var sum = 0;

for (var i = 0; i < friend; i++) {
  sum += weight[i];
  if (sum > maxWeight) {
    break;
  } else {
    ans++;
  }
}

console.log(ans);
