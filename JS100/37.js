// 오브젝트
function useObject(str) {
  var arr = str.split(" ");
  var result = {};

  for (var index in arr) {
    var val = arr[index];
    result[val] = result[val] === undefined ? 1 : result[val] + 1;
  }

  console.log;
  var name = Object.keys(result).reduce((acc, cur) =>
    result[acc] > result[cur] ? acc : cur
  );

  return `${name}(이)가 총 ${result[name]}표로 반장이 되었습니다.`;
}

// 맵
function useMap(str) {
  var arr = str.split(" ");
  var result = new Map();

  for (var index in arr) {
    var key = arr[index];

    result.has(key) ? result.set(key, result.get(key) + 1) : result.set(key, 1);
  }

  var name = [...result.keys()].reduce((acc, cur) =>
    result.get(acc) > result.get(cur) ? acc : cur
  );

  return `${name}(이)가 총 ${result.get(name)}표로 반장이 되었습니다.`;
}

console.log(useObject("원범 원범 혜원 혜원 혜원 혜원 유진 유진"));
console.log(useMap("원범 원범 혜원 혜원 혜원 혜원 유진 유진"));
