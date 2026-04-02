/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 정렬 후에 제곱하는 방식으로 해결할 수 있지만, O(n)으로도 해결 가능하다.
// two pointer를 이용하는 것인데, 핵심은 원본 배열이 정렬이 되어있는 상태여야 한다.
// 우선 각 요소의 끝 인덱스로 left와 right를 정한다.
// nums[left]와 nums[right]를 비교하여 큰 값을 result 배열의 가장 끝 부분(pos)에 넣는다.
// 큰 부분의 인덱스를 하나씩 이동시킨다. ( if(nums[left]<nums[right]) right-- )
function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(right);
  let pos = right;

  while (left <= right) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      result[pos] = nums[right--] ** 2;
      pos--;
    } else if (nums[left] ** 2 >= nums[right] ** 2) {
      result[pos] = nums[left++] ** 2;
      pos--;
    }
  }

  return result;
}
