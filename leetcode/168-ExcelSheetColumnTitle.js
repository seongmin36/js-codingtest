/**
 * @param {number} columnNumber
 * @return {string}
 */
// 논리로 풀기 or ascii code로 풀기
// A의 ascii code는 65번 -> String.fromCharCode() : 인자 number값을 ascii코드로 반환
// result=result+A와 result=A+result의 결과값은 다르다. (위치가 다름)
// 함정은 A가 0부터 시작하지 않는다는 점이다. 따라서 일반적인 진법변환 방식에서 -1을 빼야한다.
function convertToTitle(columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--;
    let row = String.fromCharCode((columnNumber % 26) + 65);

    result = row + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
}
