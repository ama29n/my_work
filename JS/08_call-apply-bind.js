// The value of this is determined by how a function is called and this process is known as runtime binding. 
// The bind() method can set the value of a function's this regardless of how it's called, and arrow functions 
// don't provide their own this binding (it retains the this value of the enclosing lexical context).


let obj = {
    firstName: "X",
    lastName: "Y"
};

let printName = function(age) {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${age}`;
};

// console.log(printName.call(obj, 20));
// console.log(printName.apply(obj, [20]));


// Bind returns a function
// const fs = printName.bind(obj);
// console.log(fs(20));



// Output Questions 

// 1. Call with function inside object 

// Given Code:
const age = 10;
var person1 = {
    name: "Xyz",
    age: 20,
    getAge() {
        return this.age;
    },
};
var person2 = {
    age: 24
};
// console.log(person1.getAge.call(person2));

// Output:
// 24

// Although the function is in person1 but it is binded to person2 





// 2. Call printAnimals such that it prints all animals in objects

// Given Code:
const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen"},
];

function printAnimals(i) {
    this.print = function () {
        console.log(`${i} -> ${this.species}: ${this.name}`);
    };
    this.print();
}
// Our Code:
for(let i = 0; i < animals.length; i++) {
    // printAnimals.call(animals[i], i);
}





// 3. Append an array to another Array 

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6];

// Concat return an array but the original array is not modified
// let arr3 = arr1.concat(arr2);

// Thus, to make changes in the same array
arr1.push.apply(arr1, arr2);





// 4. Find max in an Array 

let arr3 = [3, 6, 92, 1];
let maxi = Math.max.apply(null, arr3);






// 5. Bind Chaining 

// Given Code: 
function printTheName() {
    console.log(this.name);
}
printTheName = printTheName.bind({ name: "XYZ" }).bind({ name: "ABC" });
// printTheName();

// Output:
// XYZ

// Chaining is not possible





// 6. Explicit binding with arrow function 

// Given Code: 
const color = "blue";
var description1 = {
    color: "green",
    getColorArrow: () => {
        console.log(this.color);
    },
    getColor () {
        console.log(this.color);
    }
};
var description2 = {
    color: "yellow"
};
description1.getColorArrow.call(description2);
description1.getColor.call(description2);

// Output: 
// undefined
// yellow