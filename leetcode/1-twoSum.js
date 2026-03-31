function twoSum(nums, target) {
  const map = {};
  let find_num = 0;

  for (let i = 0; i < nums.length; i++) {
    find_num = target - nums[i];
    if (find_num in map) {
      return [i, map[find_num]];
    }

    map[nums[i]] = i;
  }
}
