import binarySearch from './binary-search';

test('returns correct index of element that we were looking for', () => {
  const inputArray = [1, 3, 5, 7, 9];
  expect(binarySearch(inputArray, 1)).toEqual(0);
  expect(binarySearch(inputArray, 3)).toEqual(1);
  expect(binarySearch(inputArray, 5)).toEqual(2);
  expect(binarySearch(inputArray, 7)).toEqual(3);
  expect(binarySearch(inputArray, 9)).toEqual(4);
});

test('returns -1 when element is not found', () => {
  expect(binarySearch([1, 2, 3], 4)).toEqual(-1);
});
