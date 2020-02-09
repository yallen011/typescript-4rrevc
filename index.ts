function countSetsOfThree(numbers: number[], threshold: number): number {
  let count = 0;
  let sum = 0;

  for (let i = 0; i <= numbers.length - 2; i++) {
    let init = numbers[i];
    console.log("init", init);
    let set = 2;
    let second = 0;
    for (let n = i + 1; n <= numbers.length - 1; n++) {
      sum = 0;
      second = numbers[n];
      console.log("second", second);
      console.log('set', set);
      if (set <= 3) {
        for (let k = n + 1; k <= numbers.length - 1; k++) {
          console.log("third", numbers[k]);
          sum = init + second + numbers[k];
          console.log("sum", sum);

          if (sum <= threshold) {
            count++;
            console.log("count", count);
          }
          set++;
        }
      }
      console.log('end second loop, reset set');
      set = 2;
    }
  }
  return count;
}

append(`countSetsOfThree([1,2,3,4], 7)`, countSetsOfThree([1, 2, 3, 4], 7), 2);
append(`countSetsOfThree([4,1,3,2], 7)`, countSetsOfThree([4, 1, 3, 2], 7), 2);
append(`countSetsOfThree([1,2,3,9], 7)`, countSetsOfThree([1, 2, 3, 9], 7), 1);
append(`countSetsOfThree([2,2,2,2], 7)`, countSetsOfThree([2, 2, 2, 2], 7), 4);
append(`countSetsOfThree([3,3,3,3], 7)`, countSetsOfThree([3, 3, 3, 3], 7), 0);
append(`countSetsOfThree([1,2,3,4,5], 7)`, countSetsOfThree([1, 2, 3, 4, 5], 7), 2);

function append(description: string, actual: number, expected: number) {
  const item = document.createElement("div");
  item.textContent = `${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector("#results").append(item);
}
