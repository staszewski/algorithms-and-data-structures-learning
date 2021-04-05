const sum = (arr: number[]): any => {
  const [, ...rest] = arr;

  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(rest);
  }
};

export default sum
