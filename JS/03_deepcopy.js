let obj = {
  name: "Aman",
  age: 21,
  gender: "M",
  Indian: true,
  hobbies: ["Cooking", "Reading"],
  address: {
    block: "B",
    house: 236, 
    street: {
        name: "Aman",
        age: "20"
    }
  },
  fs: function () {
    return this.name;
  },
  nullValue: null,
};

function deepCopy(obj) {
  try {
    if (typeof obj !== "object") {
      throw new Error("Expected an object");
    }
    let newObj = {};
    for (let key in obj) {
      let value = obj[key];
      if (Array.isArray(value)) {
        newObj[key] = [...value];
      } else if (typeof value === "object") {
        if (value === null) {
          newObj[key] = null;
        } else {
          newObj[key] = deepCopy(value);
        }
      } else if (typeof value === "function") {
        let copy_fn = JSON.stringify(value);
        newObj[key] = new Function(copy_fn);
      } else {
        newObj[key] = value;
      }
    }
    return newObj;
  } catch (error) {
    console.log(error);
  }
}
