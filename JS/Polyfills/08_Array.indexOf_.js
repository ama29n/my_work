let arr = [1, 2, 3, 4, "5", true, "am", "aman", "am", undefined];

Array.prototype.myIndexOf = function(ele) {
    for(let i = 0; i < this.length; i++) {
        if(ele === this[i]) {
            return i;
        }
    }
    return -1; 
}

console.log(arr.myIndexOf(false));
console.log(arr.indexOf(false));