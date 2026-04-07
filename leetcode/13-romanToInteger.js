/**
 * @param {string} s
 * @return {number}
 */
// roman을 record로 정의한다.
// 앞의 인덱스의 값이 현재 인덱스의 값보다 작으면 작은 수를 뺀다.
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      result -= roman[s[i]];
    } else {
      result += roman[s[i]];
    }
  }
  return result;
}
