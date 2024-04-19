package main

import (
	"fmt"
	"time"
)

// Do not communicate by sharing memory, rather share memory for communicating

// Goroutines are light weight threads managed by GO runtime

// They are faster than traditional threads, smaller in size and managed by GO runtime

// They are used to achieve parallelism

func main() {
	go printOne()
	go printTwo()
	time.Sleep(time.Second * 2)
}

func printOne() {
	for i := 0; i < 3; i++ {
		fmt.Println("One")
		time.Sleep(time.Microsecond * 3)
	}
}

func printTwo() {
	for i := 0; i < 3; i++ {
		fmt.Println("Two")
		time.Sleep(time.Microsecond * 3)
	}
}
