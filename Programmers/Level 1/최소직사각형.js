function solution(sizes) {
  var w = 0;
  var h = 0;

  for (var i = 0; i < sizes.length; i++) {
    var long = Math.max(sizes[i][0], sizes[i][1]);
    var short = Math.min(sizes[i][0], sizes[i][1]);

    w = Math.max(w, long);
    h = Math.max(h, short);
  }

  return w * h;
}
