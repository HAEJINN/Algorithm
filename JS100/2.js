var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

/*
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

start : 배열의 변경을 시작할 index
deleteCount : 배열에서 제거할 요소의 수
item : 배열에 추가할 요소

start부터 deleteCount개를 제거하고 item을 넣어라
*/
