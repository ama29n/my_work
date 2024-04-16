package main

import "fmt"

func adder(a int, b int) int {
	// Above is called the function signature
	return a + b
}

func main() {
	res := adder(2, 3)
	fmt.Println(res);

	// Inside a functionw we can only have function expression

	// func b() {}
	b := func() {
		fmt.Println("Inside function expression")
	}
	b()

	var c = func() {
		fmt.Println("func: c")
	}
	c();

	// Named function expression is not possible

	// Pointer to a function
	d := new(func())
	fmt.Printf("%T\n", d); // *func()

	var e *func()
	fmt.Println(d == nil, e == nil) // false true

	// IIFE 
	// They cannot be at the top level
	// They can return output as well
	f := func() int {
		return 2;
	}();
	
	fmt.Println(f) // 2
}
