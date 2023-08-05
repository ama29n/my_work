// filter() receives a callback which is called for each element for the original array
// It returns a new array without modifying the original array

let arr = [1, 2, 3, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function (callback) {
  try {
    if (typeof callback !== "function") {
      throw new Error(`${callback} is not a Function`);
    }
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr;
  } catch (error) {
    console.log(error);
  }
};

let r1 = arr.filter((ele) => {
  if (ele > 4) {
    return ele;
  }
});

let r2 = arr.myFilter((ele) => {
  if (ele > 4) {
    return ele;
  }
});

console.log(arr, r1, r2);
