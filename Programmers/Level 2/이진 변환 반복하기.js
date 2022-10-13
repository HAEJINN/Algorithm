function solution(s) {
  var zero = 0;
  var cnt = 0;

  while (s != 1) {
    var arr = s.split('');
    var temp = '';
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        temp += 1;
      } else {
        zero++;
      }
    }
    cnt++;
    s = temp.length.toString(2);
  }

  return [cnt, zero];
}
