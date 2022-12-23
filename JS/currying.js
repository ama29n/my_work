// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

function sum1(a) {
  return function (b) {
    return a + b;
  };
}
// console.log(sum1(2)(3));

// Infinite curried function

function sum2(a) {
  return function (b) {
    if (!b) return a;
    return sum2(a + b);
  };
}

console.log(sum2(1)(2)(3)(4)(1)(2)(3)(4)());
// console.log(sum2(1)(2)(3)(4)(1)(2)(3)(4));

// The main benefit of currying is when you need to use the same call with some of the same parameters a lot
// i.e it helps to avoid passing the same variable again and again. In these situations, currying becomes a good technique to use.

// * Important Conept
// Advanced Currying
// Implement curry(fs) : which recieves a function fs(a, b, c)  as parameter and returns a new function of the form fs(a)(b)(c)

function curry(func) {
  return function curried_function(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curried_function(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const total_sum = curry(sum);

console.log(total_sum(1)(2)(3));