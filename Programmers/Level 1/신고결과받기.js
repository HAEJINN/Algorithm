function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);

  // 신고한 사람을 담기위한 배열
  let report_list = {};
  id_list.map((id) => (report_list[id] = []));

  // report를 돌면서 신고한적없다면(report_list에 없다면) 신고자 배열에 담기
  report.map((user) => {
    let [user_id, report_id] = user.split(" ");
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  // report_list를 돌면서 신고당한 사람의 배열길이(신고자 수)가 k보다 크다면
  // 신고자 배열을 돌며 answer에 1씩 더해주기
  for (let report in report_list) {
    if (report_list[report].length >= k) {
      report_list[report].map((user) => {
        answer[id_list.indexOf(user)]++;
      });
    }
  }

  return answer;
}

/*
  for ... in => 객체에 사용. 객체의 키 값 갯수만큼 반복하며 키값을 뽑아준다
  for ... of => 컬렉션 전용 반복 구문. 사용을 위해선 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야한다
*/
