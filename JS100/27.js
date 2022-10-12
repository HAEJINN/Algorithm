var keys = "Yujin Hyewon".split(" ");
var values = "70 100".split(" ");

var obj = {};
for (var i = 0; i < keys.length; i++) {
  obj[keys[i]] = parseInt(values[i]);
}

console.log(obj);
