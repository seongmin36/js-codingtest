// 알고리즘 수업 - 선택 정렬 2 [23882]

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let count = 0;

for (let i = n - 1; i >= 1; i--) {
  let maxIdx = i;

  for (let g = 0; g < i; g++) {
    if (arr[g] > arr[maxIdx]) {
      maxIdx = g;
    }
  }

  if (maxIdx !== i) {
    [arr[maxIdx], arr[i]] = [arr[i], arr[maxIdx]];
    count++;

    if (count === k) {
      console.log(arr.join(" "));
      return;
    }
  }
}
console.log(-1);
