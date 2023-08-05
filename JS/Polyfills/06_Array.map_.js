// map() receives a callback which is called for each element for the original array
// It returns a new array without modifying the original array

let arr = [1, 2, 3];

Array.prototype.myMap = function (callback) {
  try {
    if (typeof callback !== "function") {
      throw new Error(`${callback} is not a Function`);
    }
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this));
    }
    return arr;
  } catch (error) {
    console.log(error);
  }
};

let r1 = arr.map((ele) => {
  return ele + 2;
});

let r2 = arr.myMap((ele) => {
  return ele + 2;
});

// let r1 = arr.map("");
// let r2 = arr.myMap("");

console.log(arr, r1, r2);
