/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const map = new Map();
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
      console.log(map.get(s[right]) + 1);
    }
    map.set(s[right], right);

    result = Math.max(result, right - left + 1);
  }
  return result;
}
