Array.prototype.myAt = function (index) {
  try {
    if (arguments.length > 1) {
      throw new Error("More than 1 argument");
    }
    if (isNaN(index)) {
      throw new Error("Expected an integer, received a NaN");
    }
    if (Array.isArray(index)) {
      throw new Error("Expected an integer, received an array");
    }
    if (typeof index == "object") {
      throw new Error("Expected an integer, received an object");
    }
    if (!isFinite(index)) {
      throw new Error("Index out of range");
    }
    if ((index >= 0 && this.length <= index) || index + this.length < 0) {
      throw new Error("Index out of range");
    }
    if (index % 1 !== 0) {
      throw new Error("Expected an integer, received floating point number");
    }
    if (index < 0) {
      return this[this.length + index];
    }
    return this[index];
  } catch (err) {
    console.error(err);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.myAt(-8));
