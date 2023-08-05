// Array DESTRUCTURING

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// let arr = [];
// arr = "My name is John Smith".split(" ");
// console.log(arr);


// let [first, second] = "John Smith".split(" ");
// let [first, second] = "John.Smith".split(".");
// let [first, second] = "John.Smith".split(" ");


// let arr = [1, 2, 3, 4, 5];
// let [first, second] = arr;     It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.
// console.log(first, second);


// let arr = [1, 2, 3, 4, 5];
// let [first, , third] = arr;
// console.log(first, third);


// works with any iterable on right side
// let [a, b, c, d] = "John";
// console.log(d, c, b, a);


// Assign to anything on left side 
// let obj = {};
// [obj.firstName, obj.secondName] = "John Smith".split(" ");
// console.log(obj);



// looping with .entries()

// For object
// let obj = {
//     name : "John",
//     age : 20,
//     gender : "M"
// };
// for(let [key, value] of Object.entries(obj))
// {
//     console.log(key, value);
// }

// For map
// let mp = new Map([
//     ["name", "John"],
//     ["age", 20]
// ]);
// for(let [key, value] of mp.entries()){
//     console.log(key, value);
// }



// Swap variable trick

// let firstName = "John";
// let lastName = "Smith";
// [firstName, lastName] = [lastName, firstName];
// console.log(firstName, lastName);



// Rest Operator
// let arr = [];
// arr = "My name is John Smith and I am a boy".split(" ");
// let [first, second, ...rest] = arr;
// console.log(first, second, rest[1], rest[rest.length - 1]);



// Default value

// let arr = [];
// let [firstName, secondName] = arr;
// console.log(firstName, secondName);

// let arr = ["John"];
// let [firstName = "Julie", secondName = "Henry"] = arr;
// console.log(firstName, secondName);




// Object DESTRUCTURING



// let obj = {
//     name : "John",
//     age : 20,
//     gender : "M"
// };

// let {name, age, gender} = obj;
// console.log(name, age, gender);



// let obj = {
//     name : "John",
//     age : 20,
//     gender : "M"
// };

// let {name, gender, age} = obj;
// console.log(name, age, gender);


// let obj = {
//     name : "John",
//     age : 20,
//     gender : "M"
// };

// let {age, b, c} = obj;
// console.log(age, b, c);



// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, 
// then we can set the variable name using a colon:


// let obj = {
//     name : "John",
//     age : 20,
//     gender : "M"
// };

// let {age : a, gender : g, name} = obj;
// console.log(name, a, g);




// Default Values in Object DESTRUCTURING
// let obj = {
//     name : "John",
// };

// let {name = "Henry", age = 20, gender = "M"} = obj;
// console.log(name, age, gender);




// Final Example
// let obj = {
//     name : "John"
// };

// let {name : n, age : a = 20, gender : g = "M"} = obj;
// console.log(n, a, g);




// The ...rest pattern
// let obj = {
//     name : "John",
//     age : 20,
//     gender : "M"
// };

// let {name, ...rest} = obj;
// console.log(typeof rest);
// console.log(rest.age, rest.gender);



// The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. 
// Such code blocks are used to group statements.
// So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

// let name, age, gender;
// let obj = {
//     name : "John",
//     age : 20, 
//     gender : "M"
// };

// ({name, age, gender} = obj);
// console.log(name, age, gender);



// let arr = [1,2,3,4];

// arr.forEach(ele => {
//     console.log(ele);
// });



// Spread Sytax 
// let arr = [1, 2, 3, 4, 5];
// console.log(...arr);

// let arr1 = [2, -2, 4];
// let arr2 = [6, 9, 10, -6];
// let arr3 = [...arr2, ...arr1];
// console.log(arr3);



// String to array
// let str = "Aman";
// let arr = [...str];
// console.log(arr);





// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr1 == arr2);
// console.log(JSON.stringify(arr1) == JSON.stringify(arr2));








// let str = "i am a boy";
// console.log(str.split(" "));






// let head = {
//     val : 1,
//     next : {
//         val : 2,
//         next : {
//             val : 3,
//             next : {
//                 val : 4,
//                 next : {
//                     val : 5,
//                     next : {
//                         val : 6,
//                         next : null
//                     }
//                 }
//             }
//         }
//     }
// };




// linked list in js

// let head = {
//     val : 1,
//     next : {
//         val : 2,
//         next : {
//             val : 3,
//             next : {
//                 val : 4,
//                 next : {
//                     val : 5,
//                     next : null
//                 }
//             }
//         }
//     }
// };

// let slow = head, fast = head;

// while(fast != null && fast.next != null) {
//     fast = fast.next.next;
//     slow = slow.next;
// }
// console.log(slow.val);



// class node {
//     public:
//     int val;
//     node* next;

//     node(int val) {
//         val = val;
//         next = NULL;
//     }
// };

// void insert(node *head, int val) {
//     node * ptr = new node(val);
//     if(head == NULL){
//         head = ptr;
//         return;
//     }
//     node *temp = head;
//     while(temp->next != NULL)
//     temp = temp->next;
//     temp->next = ptr;
//     return;
// }




// function list(val) {
//     this.val = val === undefined ? 0 : val;
//     this.next = null;
// }


// let head = new list(1);
// head.next = new list(2);
// head.next.next = new list(3);



// let ptr = head;
// while(ptr != null)
// {
//     console.log(ptr.val);
//     ptr = ptr.next;
// }







// function list(val) {
//     this.val = val === undefined ? -1 : val; // we assume here that a node can't have value as -1
//     this.next = null;
// }

// function add(val, head) {
//     let ptr = new list(val);
//     if(head.val == -1) {
//         head = ptr;
//         return head;
//     }
//     let temp = head;
//     while(temp.next != null)
//     temp = temp.next;
//     temp.next = ptr;
//     return head;
// }

// let head = new list();
// head = add(1, head);
// head = add(2, head);
// head = add(3, head);

// console.log(head);






// Declarations
// let arr = [];
// let arr = new Array();

// let arr = [1, "aman", 'm', {age : 29}, function(){console.log("hi");},];
// console.log(arr[3].age);
// console.log(arr[4]());



// array methods 

// 1. push()

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// 2. pop()
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);

// push() and pop() methods, they are used to modify the array from the end.

// 3. shift()
// let arr = [1, 2, 3];
// console.log(arr);
// arr.shift();
// console.log(arr);

// 4. unshift()
// let arr = [1, 2, 3];
// console.log(arr);
// arr.unshift(0);
// console.log(arr);

// shift() and unshift(), these are used to modify the array from the beginning


// array as queue
// queue - fifo list 
// if we want to make an array behave like a queue, push() and shift() will be used 

// array as stack
// stack - lifo
// here push() and pop() will be used 


// iteration over arrays

// let arr = [1, 2, 3, true, "aman"];

// for(let ele of arr) {
//     console.log(ele);
// }

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for...each

// arr.forEach((ele) => {
//     console.log(ele);
// });



// length

// let arr = [1, 2, 3, true, "aman"];
// arr.length = 3;
// console.log(arr.length);
// console.log(arr);
// arr.length = 5;
// console.log(arr);
// console.log(arr[4]);

// let arr = [1, 2, 3];
// arr.length = 0;
// arr.length = 3;
// console.log(arr);



