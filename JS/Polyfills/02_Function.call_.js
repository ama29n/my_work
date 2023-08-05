let obj = {
  name: "Aman",
};

function printDetials(age) {
  console.log(`Name: ${this.name}, Age: ${age}`);
}

Function.prototype.myCall = function (obj = {}, ...args) {
  try {
    if (typeof obj !== "object") {
      throw new Error("First parameter is expected to be an object");
    }
    obj.customFunction = this;
    obj.customFunction(...args);
  } catch (error) {
    console.log(error);
  }
};

printDetials.myCall();
printDetials.call();
