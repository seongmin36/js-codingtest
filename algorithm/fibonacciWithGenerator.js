// 피보나치 수열 with 제너레이터

function* memoizedFibonacci() {
  let cache = [0, 1];
  yield cache[0];
  yield cache[1];

  let i = 2;
  while (true) {
    cache[i] = cache[i - 1] + cache[i - 2];
    yield cache[i];
    i++;
  }
}

const fib = memoizedFibonacci();

let finish = 10;
for (let i = 0; i < finish; i++) {
  console.log(fib.next().value);
}
