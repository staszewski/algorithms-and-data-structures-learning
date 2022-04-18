const largestSubarraySum = (arr: number[], k: number): number[] => {
  let maxSum = 0;
  let maxSumArray: number[] = [];
  let currentSum = 0;
  const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    let currentSlice = arr.slice(i, k + i);
    currentSum = sum(currentSlice);
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxSumArray = currentSlice;
    }
  }
  return maxSumArray;
};

test('should ', () => {
  expect(largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3)).toEqual([9, 2, 6]);
});
