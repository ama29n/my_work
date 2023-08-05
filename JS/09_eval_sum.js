function findSum(...args) {
  let sum = 0;
  for (let element of args) {
    if (Array.isArray(element)) {
      sum += findSum(...element);
    } else if (!isNaN(parseInt(element))) {
      sum += parseInt(element);
    }
  }
  return sum;
}

console.log(findSum(1, 2, 3, [4, 5], ["100"]));
console.log(findSum(1, 2));
console.log(findSum(1, 2, 3));
console.log(findSum(1, 2, [3, 4]));
console.log(findSum(1, 2, [[3]]));
console.log(findSum([[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]));
console.log(findSum(null, undefined, [[1, 2], [3, 4], 5, 6], 7, 8, 9));
console.log(findSum("100", "Rahul", "200", "null", 15, "Rohan"));
console.log(findSum(1, 2, 3, 4, 5, [[[3, 4, 5]]]));
