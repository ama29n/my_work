// Returns a concatenated array and doesn't modify the original array.

let arr1 = [1, 2, 3];

let arr2 = [4, 5];

let arr3 = [6, 7, [8, 9]];

let fn = () => {
  console.log("Arrow Function");
};

Array.prototype.myConcat = function (...args) {
  let nums = [...this];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      nums.push(...args[i]);
    } else {
      nums.push(args[i]);
    };
  }
  return nums;
};

console.log(arr1.concat(arr2, arr3, 100, {}, "123", fn));

console.log(arr1.myConcat(arr2, arr3, 100, {}, "123", fn));
