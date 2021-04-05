import sum from './recursion-sum-of-elements';

test('returns sum using recursion', () => {
  const result1 = sum([1, 2, 3]);
  expect(result1).toEqual(6);
  const result2 = sum([5, 10, 20]);
  expect(result2).toEqual(35);
  const result3 = sum([300, -300, 50]);
  expect(result3).toEqual(50);
});

test('returns 0 when empty array is passed as input', () => {
  const result = sum([]);
  expect(result).toEqual(0);
});
