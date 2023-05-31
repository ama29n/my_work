let id: number = 2;

// Basic Types

let exampleName: string = "xyz";
let age: number = 2;
let flag: boolean = false;

let unknown: any = 2;
unknown = "2";





// Arrays

// It is an array of numbers 
let arr1: number[] = [1, 2 , 3];
// arr.push(true); -> Error 

let arr2: any[] = [1, "2", false];

// Generic array type
let arr3: Array<number> = [1, 2, 3];

let arr4: Array<number | string> = [1, 2, "3"]





// Tuples

let arr5: [string, number, boolean] = ["xyz", 3, false];
// let arr3: [string, number, boolean] = ["xyz", false, 3]; -> Error 

// Tuple Array 
let arr6: [number, string][] = [
    [1, "xyz"],
    [2, "abc"]
];





// Union
let pid: number | string = 2;
pid = "2";

let arr7: (number | string)[] = [1, 2, "3"];
// let arr5: (number | string)[] = [1, 2, "3", false] -> Error



// TypeScript will only allow an operation if it is valid for every member of the union.

// function printId(id: number | string) {
//     console.log(id.toUpperCase());
// } 

// toUpperCase() doesn't exist for type number






// Objects
let obj1: {
    name: string,
    id: number
} = {
    name: "xyz",
    id: 2,
};




type User = {
    name: string,
    id: number
};
const obj2: User = {
    name: "xyz",
    id: 2
}





// Type
type moreExampleOfType = number | string | null;





// Functions 

// function fs(a, b) {
//     return a + b;
// }

function fs1(a: number, b: number): number {
    return a + b;
}
fs1(2, 3);



function fs2(a: number | undefined | null) : void {
    console.log(a);
}
// fs2() -> gives error, thus there are 2 more types: null and undefined
fs2(null);


export {};

