/**
 * @param {number} columnNumber
 * @return {string}
 */
// 논리로 풀기 or ascii code로 풀기
// A의 ascii code는 65번 -> String.fromCharCode() : 인자 number값을 ascii코드로 반환
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
