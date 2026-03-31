/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  let arr = new Array(26).fill(0);

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }

  for (let g = 0; g < arr.length; g++) {
    if (arr[g] > 0) {
      return false;
    }
  }
  return true;
}
