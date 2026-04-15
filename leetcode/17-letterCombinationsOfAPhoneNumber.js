/**
 * @param {string} digits
 * @return {string[]}
 */
// map으로 전화번호의 등록된 문자를 넣는다
// composite라는 재귀함수를 생성(digits 인덱스, 현재 인덱스값)
// composite 함수 파라미터에 업데이트 되는 것은 digits_index값과 인덱스에 맞는 알파벳
// digits.length만큼 반복하면 함수 실행 종료
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits) {
  let result = [];

  if (!digits) return [];

  function composite(index, current) {
    console.log(current);
    if (index === digits.length) {
      result.push(current);
      return;
    }
    let m = map[digits[index]];

    for (let i = 0; i < m.length; i++) {
      composite(index + 1, current + m[i]);
    }
  }
  composite(0, "");
  return result;
}
