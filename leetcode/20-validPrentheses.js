/**
 * @param {string} s
 * @return {boolean}
 */
// 결국 가장 최근에 열린 bracket이 닫혀있으면 true, 그렇지 않으면 false
// bracket object를 정의한다.
// stack을 정의하여, s[i]에서 가장 최근에 열린 bracket이 쌍인지를 판별 (pop, push)
const map = {
  ")": "(",
  "}": "{",
  "]": "[",
};

function isValid(s) {
  const stack = [];
  for (let c of s) {
    if (map[c]) {
      const top = stack.pop();

      if (map[c] !== top) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}
