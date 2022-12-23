// The constructor syntax for a promise object is:
// let promise = new Promise(function(resolve, reject) {

// });





// The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.
// Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

// The executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if 
// it was successful or reject if there was an error.

// The promise object returned by the new Promise constructor has these internal properties:

//     state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
//     result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.





// To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to 
// change the state of the corresponding promise object.

// A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.





// There can be only a single result or an error
// The executor should call only one resolve or one reject. All further calls of resolve and reject are ignored:
// let promise = new Promise(function(resolve, reject) {
//     resolve("done");
  
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
//   });





// The state and result are internal
// The properties state and result of the Promise object are internal. We can’t directly access them. 
// We can use the methods .then()/.catch()/.finally() for that.

// .then() is a function that runs when the promise is resolved, and receives the result.
// .catch() method runs when the promise is rejected, and receives the error.

// let promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
  
//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => reject("done"), 10000);
//   });
//   promise.then(error => console.log(error)).catch(error => console.log(error));





// The call .finally(f) always runs when the promise is settled: be it resolve or reject.
// A finally handler has no arguments.

// let promise = new Promise((resolve, reject) => {
//     let check = 1 + 2;
//     if(check == 2) resolve("promise is resolved");
//     else reject("promise is rejected");
// });

// promise.then(value => {console.log("inside then, " + value);}).catch(error => console.log("inside catch, " + error)).finally(console.log("promise is settled"));





// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   delay(3000).then(() => console.log('runs after 3 seconds'));





// Promise Chaining

// the then() function returns a new promise, different from the original

// let p = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1, 1); // ( * )
// });

// p.then(num => { // ( ** )

//     console.log(num);
//     return num * 2;

// }).then(num => { // ( *** )

//     console.log(num);
//     return num * 2;

// }).then(result => {

//     console.log(result);
// });


// Here the flow is:

// The initial promise resolves in 1 second (*),
// Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).
// The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
// …and so on.

// The whole thing works, because every call to a .then() returns a new promise, so that we can call the next .then() on it.



// We may have as many .then() handlers as we want, and then use a single .catch() at the end to handle errors in all of them.





// let p = new Promise((resolve, reject) => {
//     let check = 1;
//     reject(check);
// });

// p.catch(num => {console.log(num); return num * 2;}).catch(num => {console.log(num); return num * 2;}).catch(num => {console.log(num);});





// let p = new Promise((resolve, reject) => {
//     let check = 1;
//     resolve(check);
// });

// p.then(num => {console.log(num); return num * 2;}).then(num => {console.log(num); return num * 2;}).then(num => {console.log(num);});





// Returning promises

// let p = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 1);
// });

// p.then(num => {
//     console.log(num);
//     return new Promise((resolve, reject) => { // ( * )
//         setTimeout(resolve, 2000, num * 2);
//     });
// }).then(num => {
//     console.log(num);
//     return new Promise((resolve, reject) => { // ( ** )
//         setTimeout(resolve, 2000, num * 2);
//     });
// }).then(num => {console.log(num);});


// Here the first .then shows 1 and returns new Promise(…) in the line (*). After one second it resolves, 
// and the result (the argument of resolve, here it’s result * 2) is passed on to handler of the second .then(). 
// That handler is in the line (**), it shows 2 and does the same thing.





// let p = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 2000);
// });

// p.then(num => {
//     console.log(num);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num * 2), 2000);
//     });
// }).then(num => {
//     console.log(num);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num * 2), 2000);
//     });
// }).then(num => {console.log(num);});





// Bigger Picture : fetch() 

// Syntax - let promise = fetch(url);

// This makes a network request to the url and returns a promise. The promise resolves with a response object when the remote 
// server responds with headers, but before the full response is downloaded.

// To read the full response, we should call the method response.text(): it returns a promise that resolves when the full text is 
// downloaded from the remote server, with that text as a result.

// fetch('/article/promise-chaining/user.json')
//   // .then below runs when the remote server responds
//   .then(function(response) {
//     // response.text() returns a new promise that resolves with the full response text
//     // when it loads
//     return response.text();
//   })
//   .then(function(text) {
//     // ...and here's the content of the remote file
//     alert(text); // {"name": "iliakan", "isAdmin": true}
//   });


// The response object returned from fetch also includes the method response.json() that reads the remote data and parses it as JSON.





// Error handling with promises

// fetch('https://no-such-server.blabla') // rejects
// .then(response => response.json())
// .catch(err => console.log(err)) // TypeError: failed to fetch 

// We may have as many .then handlers as we want, and then use a single .catch at the end to handle errors in all of them.

// the .catch doesn’t have to be immediate. It may appear after one or maybe several .then().

// let p = new Promise((resolve, reject) => {
//     resolve();
// });

// p.then(() => {
//     console.log("1st, then");
// }).then(() => {
//     console.log("2nd, then");
//     throw new Error("Whoops!");
// }).then(() => {
//     console.log("3rd, then");
//     // throw new Error("Whoops!");
// }).catch(error => console.log(error));





// Implicit try...catch

// The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.

// let p = new Promise((resolve, reject) => {
//     throw new Error("Whoops");
// });

// p.catch(error => {console.log(error);}).then(() => {console.log("then after catch");});





// Error in setTimeout()

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

// Here the error is generated not while the executor is running, but later. So the promise can’t handle it.
    




// Rethrowing

// new Promise((resolve, reject) => {

//     throw new Error("Whoops!");
  
//   }).catch(function(error) { // (*)
  
//     if (error instanceof URIError) {
//       // handle it
//     } else {
//       alert("Can't handle such error");
  
//       throw error; // throwing this or another error jumps to the next catch
//     }
  
//   }).then(function() {
//     /* doesn't run here */
//   }).catch(error => { // (**)
  
//     alert(`The unknown error has occurred: ${error}`);
//     // don't return anything => execution goes the normal way
  
//   });





// Microtasks

// Promise handlers .then()/.catch()/.finally() are always asynchronous.
// Even when a Promise is immediately resolved, the code on the lines below .then()/.catch()/.finally() will still execute before these handlers.

// let promise = Promise.resolve();
// promise.then(() => console.log("promise done!"));
// console.log("code finished"); 


// let p = new Promise((a, b) => {
//   let check = true;
//   if(check) a();
// }).then(() => {console.log("working");}).catch(() => {console.log("not working");});




// let p = new Promise((resolve, reject) => {

//     let result = new Error();

//     if(result)
//     resolve(result);
//     else 
//     reject();

// }).then(num => {
//     console.log(num);
// }).catch(() => console.log("Error"));


// Promise.all(iterable)

Promise.all([
	new Promise((resolve, reject) => setTimeout(() => resolve("Done 1"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject("2nd Failed"), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("Done 3"), 1000)),
]).then(msg => console.log(msg)).catch(error => console.log(error));

// If all are resolved then we get output as array of resolved values of all outputs
// Even if one fails, we get the error of the rejected promise and all other promises are also stopped from executing







// Promise.allSettled(iterable)

Promise.allSettled([
    new Promise((resolve, reject) => setTimeout(() => resolve("Done 1"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject("2nd Failed"), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("Done 3"), 1000)),
]).then(msg => console.log(msg)).catch(error => console.log(error));

// Gives output of all promises irrespective of the status of success of the promises in the form of an array
// for every promise there is an object which has 2 properties: status and value






// Promise.race(iterable)
// Similar to Promise.all() but waits only for the first promise to settle.







// Promise.any(iterable)
// Similar to Promise.race() but it waits only for the first fulfilled promise.