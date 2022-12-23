let arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function(fn) {
    for(let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}

arr.forEach((el) => {
    console.log(el);
})

console.log("\n");

arr.myForEach((el) => {
    console.log(el);
})