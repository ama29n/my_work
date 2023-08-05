function myFlat(arr, depth = Infinity) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result.push(...myFlat(element, depth - 1));
    } else {
      result.push(element);
    }
  });
  return result;
}

const arr = [1, 2, 3, [10, 20]];

console.log(myFlat(arr));
