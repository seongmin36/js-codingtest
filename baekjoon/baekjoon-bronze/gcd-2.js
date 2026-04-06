// GCD 합 [9613]
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const line = Number(input[0]);

for (let i = 1; i <= line; i++) {
  const arr = input[i].split(" ").map(Number);
  const test_case = arr[0];
  const new_arr = arr.slice(1);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let sum_gcd = 0;
  for (let g = 0; g < test_case; g++) {
    for (let h = g + 1; h < test_case; h++)
      sum_gcd += gcd(new_arr[g], new_arr[h]);
  }

  console.log(sum_gcd);
}
