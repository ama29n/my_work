package main

import "fmt"

func main() {
	var s1 []int
	var s2 = []int{}
	fmt.Println(s1 == nil, s2 == nil) // true false
	fmt.Println(s1, s2)               // [] []

	// nil represents uninitialised state

	s3 := []int{}
	s4 := make([]int, 4)   // makes a slice of size 4 and initializes every element with the type's 0 value
	fmt.Println(s3, s4)    // [] [0 0 0 0]
	fmt.Printf("%T\n", s4) // []int

	s5 := []int{1, 2, 3, 4, 5}
	s6 := []int{6, 7, 8}
	s7 := append(s5, s6...)
	fmt.Println(s7) // [1 2 3 4 5 6 7 8]

	// Creates a pointer to a slice
	s8 := new([]int)
	*s8 = append(*s8, 2, 3, 4)
	fmt.Printf("%T\n", s8) // *[]int
	fmt.Println(*s8) // [2 3 4]

	// Slices are referrential
	s9 := []int{1, 2}
	s10 := s9
	s9[0] = 9;
	fmt.Println(s10) // [9 2]

	// Copy a slice
	s11 := []int{2, 3, 4}
	s12 := make([]int, len(s11))
	copy(s12, s11)
	s11[0] = 0
	fmt.Println(s11, s12) // [0 3 4] [2 3 4]
}
