function deepcopy(obj) {
  let newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      newObj[key] = [...value];
    } else if (typeof value === "object") {
      newObj[key] = deepcopy(value);
    } else if (typeof value === "function") {
      let fs = JSON.stringify(value);
      newObj[key] = new Function(fs);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

let address = {
  block: "B",
  house: 236,
};

let obj = {
  name: "Aman",
  age: 21,
  gender: "M",
  Indian: true,
  hobbies: ["Cooking", "Reading"],
  address: address,
  fs: function () {
    return this.name;
  },
};

let obj2 = deepcopy(obj);
console.log(obj2.fs === obj.fs);
