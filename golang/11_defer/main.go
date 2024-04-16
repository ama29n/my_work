package main

import "fmt"

// Use Case: 1. resource cleanup 2. file close 3. unlocking mutexes

// Execution happens in LIFO manner

func main1() {
	defer fmt.Println("1st statement")
	defer fmt.Println("2nd statement")
	defer fmt.Println("3rd statement")
	// 3rd statement
	// 2nd statement
	// 1st statement
}

// Every function has its own stack

// The arguments passed to the deferred function are evaluated immediately but function call itself is deferred

func main() {
	a := 2
	defer myFunc(a)
	a = 3
}

func myFunc(a int) {
	fmt.Println(a) // 2
	main1()
}
