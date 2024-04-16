package main

import "fmt"

// GO supports lexical environment and closures

func outer() func() {
	outerVar := 10
	innerFunc := func() {
		outerVar++
		fmt.Println(outerVar)
	}
	return innerFunc
}

func main() {
	instance1 := outer()
	instance2 := outer()

	instance1() // 11
	instance1() // 12
	instance2() // 11
}
