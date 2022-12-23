let name = {
    firstName: "abc",
    lastName: "xyz"
};

function print(state, country) {
    console.log(this.firstName + " " + this.lastName + " of " + state + ", " + country); 
}

let printName1 = print.bind(name, "Delhi");

Function.prototype.myBind = function(...args) {
    let fn = this;

    let bindArgs = [...args];
    bindArgs.splice(0, 1);

    return function(...callArgs) {
        fn.apply(args[0], [...bindArgs, ...callArgs]);
    }
}


let printName2 = print.myBind(name, "Delhi");

setTimeout(() => {
    printName1("India");
}, 1000);
setTimeout(() => {
    printName2("India");
}, 1000);
