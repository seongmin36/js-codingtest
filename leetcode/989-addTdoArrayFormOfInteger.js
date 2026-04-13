/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
// 덧셈 순서의 역발상 : k를 num 배열에다가 더할 생각을 하지만 오히려 num배열의 원소들을 k에다가 더한다
// 완성된 k의 각 자릿수를 num[index]에 넣는다.
function addToArrayForm(num, k) {
  let i = num.length - 1;

  while (k > 0 || i >= 0) {
    if (i >= 0) {
      k += num[i];
      num[i] = k % 10;
    } else {
      num.unshift(k % 10);
    }
    i--;
    k = Math.floor(k / 10);
  }

  return num;
}
