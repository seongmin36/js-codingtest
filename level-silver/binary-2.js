// 나무 자르기 [2805]

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const line1 = input[0].split(" ").map(Number);
const tree_need = line1[1];
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let low = 0;
let high = trees[trees.length - 1];
let result = 0;

while (low <= high) {
  let sum = 0;
  let pivot = Math.floor((low + high) / 2);
  trees.forEach((tree) => {
    if (tree > pivot) {
      sum += tree - pivot;
    }
  });
  if (sum >= tree_need) {
    result = pivot;
    low = pivot + 1;
  } else {
    high = pivot - 1;
  }
}

console.log(result);
