function solution(people) {
  var set = new Set();
  for (var p in people) {
    set.add(p);
  }
  return set.size;
}

const people = {
  이호준: '01050442903',
  이호상: '01051442904',
  이준호: '01050342904',
  이호준: '01050442903',
  이준: '01050412904',
  이호: '01050443904',
  이호준: '01050442903',
};

console.log(solution(people));
