"use strict";
exports.__esModule = true;
var id = 2;
// Basic Types
var exampleName = "xyz";
var age = 2;
var flag = false;
var unknown = 2;
unknown = "2";
// Arrays
// It is an array of numbers 
var arr1 = [1, 2, 3];
// arr.push(true); -> Error 
var arr2 = [1, "2", false];
// Generic array type
var arr3 = [1, 2, 3];
var arr4 = [1, 2, "3"];
// Tuples
var arr5 = ["xyz", 3, false];
// let arr3: [string, number, boolean] = ["xyz", false, 3]; -> Error 
// Tuple Array 
var arr6 = [
    [1, "xyz"],
    [2, "abc"]
];
// Union
var pid = 2;
pid = "2";
var arr7 = [1, 2, "3"];
// let arr5: (number | string)[] = [1, 2, "3", false] -> Error
// TypeScript will only allow an operation if it is valid for every member of the union.
// function printId(id: number | string) {
//     console.log(id.toUpperCase());
// } 
// toUpperCase() doesn't exist for type number
// Objects
var obj1 = {
    name: "xyz",
    id: 2
};
var obj2 = {
    name: "xyz",
    id: 2
};
// Functions 
// function fs(a, b) {
//     return a + b;
// }
function fs1(a, b) {
    return a + b;
}
fs1(2, 3);
function fs2(a) {
    console.log(a);
}
// fs2() -> gives error, thus there are 2 more types: null and undefined
fs2(null);
