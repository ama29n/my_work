let arrow = () => {
    return `I am a arrow function`;
};

// Arrow functions have no "this" & "super".
// They dont have "arguments". If we try to access it, we get ReferenceError: arguments is not defined.
// Can't be called with new.

let obj = {
    title: "Arrow Functions",
    arr: ["x", "y", "z"],
    print() {
        this.arr.forEach((ele) => {
            console.log(this.title + " : " + ele);
        })
    }
}

obj.print();

// This code works because arrow functions do not have this. If this is accessed, it is taken from the outside.

// And the following code doesn't works 

// let obj = {
//     title: "Arrow Functions",
//     arr: ["x", "y", "z"],
//     print() {
//         this.arr.forEach(function(ele) {
//     console.log(this.title + " : " + ele);
// })
//     }
// }

// Output -> undefined : x
//           undefined : y
//           undefined : z