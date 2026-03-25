// 필요한 경우 Math 라이브러리는 기본 내장되어 있습니다.
// 예: Math.abs(), Math.max() 등

function solution(arr, N, J) {
  let answer = 0;
  let remainingJ = J;

  while (answer === 0) {
    remainingJ = arr.reduce((acc, cur, idx) => {
      if (acc <= 0) return null;

      if (acc - cur <= 0) {
        answer = idx + 1;
        return 0;
      }
      return acc - cur;
    }, remainingJ);
  }
  return answer;
}

// --- 아래는 테스트케이스 출력을 위한 코드입니다. ---

const arr1 = [7, 5, 2, 9, 3, 4];
const N1 = 6;
const J1 = 80;
const ret1 = solution(arr1, N1, J1);
console.log("solution 함수의 반환 값은", ret1, "입니다.");

const arr2 = [4, 11, 6, 5, 7, 1, 2, 9, 15];
const N2 = 9;
const J2 = 444;
const ret2 = solution(arr2, N2, J2);
console.log("solution 함수의 반환 값은", ret2, "입니다.");

const arr3 = [1, 3, 1, 3, 1];
const N3 = 5;
const J3 = 131;
const ret3 = solution(arr3, N3, J3);
console.log("solution 함수의 반환 값은", ret3, "입니다.");
