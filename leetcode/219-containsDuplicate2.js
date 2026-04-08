/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Map클래스를 활용한 HashMap(value, key)로 빠르게 인덱스 찾기
function containsNearbyDuplicate(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let index = map.get(nums[i]);

      if (i - index <= k) {
        console.log(
          `${map.get(nums[i])}, index값: ${index} 인덱스 차이: ${i - index}`,
        );
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// set을 이용한 오래된 배열 삭제 방법으로 해결하기
function containsNearbyDuplicate(nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);

    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
}
