package main

import "fmt"

func main() {
	var arr [4]int
	arr[0] = 21
	arr[1] = 22
	arr[3] = 24
	fmt.Println(arr, len(arr)) // [21 22 0 24] 4
	fmt.Printf("%T\n", arr)    // [4]int

	// var nums [4]int = [4]int{}
	// var nums = [4]int{}
	nums := [4]int{}
	fmt.Println(nums) // [0 0 0 0]

	// cannot use append()

	// Arrays are not refferential
	a1 := [3]int{1, 2, 3}
	a2 := a1
	a1[0] = 9
	fmt.Println(a1, a2)   // [9 2 3] [1 2 3]
	fmt.Println(a1 == a2) // false, arrays are referred as values
}
