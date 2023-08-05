// FilterRange 

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     return arr.filter(ele => {
//         if(ele >= a && ele <= b)
//             return ele;
//     })
// }

// let filtered = filterRange(arr, 1, 4);
// console.log(arr, filtered);





// FilterRange in place

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// filterRangeInPlace(arr, 1, 4);
// console.log(arr);





// Sort in descending order

// let arr = [5, 2, 1, -10, 8];

// function compare(a, b) {
//     if(a > b) return -1;
//     else return 1;
// }

// arr.sort(compare);

// console.log(arr);





// Sort users by age

// function compare(a, b) {
//     if(a.age > b.age) return 1;
//     return -1;
// }

// function sortByAge(arr) {
//     arr.sort(compare);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// console.log(arr);






// Randomly sort an array

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.sort((a, b) => Math.random() - 0.5);

// console.log(arr);






// Get average age

// function getAverageAge(arr) {
//     return arr.reduce((sum, ele) => sum + (ele.age / arr.length), 0);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log(getAverageAge(arr));






// Finding unique elements

// function unique(arr) {
//     let check = [];

//     arr.map(ele => {
//         if(!check.includes(ele))
//             check.push(ele);
//     })

//     return check;
//   }
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log(unique(strings)); // Hare, Krishna, :-O
