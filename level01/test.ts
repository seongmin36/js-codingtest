// // 오늘의 날짜
// const today = new Date();

// console.log(today.toISOString().split("T")[0]);

// // A+B 출력 (중요)
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// console.log(a + b);

// // A-B 출력 (중요)
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// console.log(a - b);

// // A*B 출력 (중요)
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// console.log(a * b);

// A/B 출력 (중요)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a / b);
