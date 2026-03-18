// 거스름돈 [14196]
// 1. 5의 배수인지 체크
// 2. 5의 배수라면 끝.
// 3. 5의 배수가 아니라면, 2를 빼기
// 4. 다시 5의 배수인지 체크
// 5. 5의 배수라면 끝.
// 6. 5의 배수가 아니라면 다시 2를 빼기 반복

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

let change = input;
let count = 0;

while (change > 0) {
  if (change % 5 !== 0) {
    change -= 2;
    count++;
  } else if (change % 5 === 0) {
    change -= 5;
    count++;
  }
}

if (change === 0) {
  console.log(count);
} else {
  console.log(-1);
}
