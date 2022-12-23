// JSON

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['js'],
//     wife: null
//   };

// let json = JSON.stringify(student);
// console.log(json);
// {"name":"John","age":30,"isAdmin":false,"courses":["js"],"wife":null}

// The method JSON.stringify(student) takes the object and converts it into a string.
// The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or 
// put into a plain data store.

// Please note that a JSON-encoded object has several important differences from the object literal:
// Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
// Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.







// Some JavaScript-specific object properties are skipped by JSON.stringify.

// Namely:
// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.

// let user = {
//     sayHi() { // ignored
//       alert("Hello");
//     },
//     [Symbol("id")]: 123, // ignored
//     something: undefined // ignored
//   };
  
//   alert( JSON.stringify(user) ); // {} (empty object)






// Nested objects are supported and converted automatically.
// let meetup = {
//     title: "Conference",
//     room: {
//       number: 23,
//       participants: ["John", "Anne"]
//     }
//   };
// let json = JSON.stringify(meetup);
// console.log(json);
// {"title":"Conference","room":{"number":23,"participants":["John","Anne"]}}


// The important limitation: there must be no circular references.
// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };
  
//   meetup.place = room; 
//   room.occupiedBy = meetup;
//   let json = JSON.stringify(meetup);
//   console.log(json);

//   TypeError: Converting circular structure to JSON









// Full syntax of JSON.stringify() is 
// let json = JSON.stringify(value, replacer, space);

// value - A value to encode.
// replacer - Array of properties to encode or a mapping function function(key, value).
// space - Amount of space to use for formatting

// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup references room
//   };
  
//   room.occupiedBy = meetup; // room references meetup



// let json = JSON.stringify(meetup, ['title', 'participants']);
// console.log(json);
// {"title":"Conference","participants":[{},{}]}


// let json = JSON.stringify(meetup, ['title', 'participants','name']);
// console.log(json);
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}


// let json = JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']);
// console.log(json);
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

// let json = JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number', 'occupiedBy']);
// console.log(json);
// TypeError: Converting circular structure to JSON


// we can use a function instead of an array as the replacer.
//   let json = JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key} ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//   });

//   console.log('\n',json);

//   : [object Object]
//   title: Conference
//   participants: [object Object],[object Object]
//   0: [object Object]
//   name: John
//   1: [object Object]
//   name: Alice
//   place: [object Object]
//   number: 23
//   occupiedBy: [object Object]
  
//    {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

// The first call is special. It is made using a special “wrapper object”: {"": meetup}. In other words, the first (key, value) pair has an empty key, 
// and the value is the target object as a whole. That’s why the first line is ":[object Object]" in the example above.

// The idea is to provide as much power for replacer as possible: it has a chance to analyze and replace/skip even the whole object if necessary.






// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
//   };
  
//   // circular references
//   room.occupiedBy = meetup;
//   meetup.self = meetup;

//   console.log( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
//   }));

