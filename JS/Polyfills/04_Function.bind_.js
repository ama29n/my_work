const obj = {
  name: "Aman",
  age: 29,
};

function printDetails(gender, department) {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Gender: ${gender}, Department: ${department}`
  );
}

Function.prototype.myBind = function (obj, ...bindArgs) {
  try {
    if (typeof obj !== "object") {
      throw new Error("First parameter is expected to be an object");
    }
    obj.customFunction = this;
    return function (...callArgs) {
      return obj.customFunction(...bindArgs, ...callArgs);
    };
  } catch (error) {
    console.log(error);
  }
};

const f1 = printDetails.bind(obj, "M");
const f2 = printDetails.myBind(obj, "M");

f1("CSE");
f2("IT");
