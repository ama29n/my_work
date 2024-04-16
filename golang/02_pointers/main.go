package main

import "fmt"

func main() {
	// var ptr *int
	// s := 2
	// ptr = &s
	// fmt.Print(ptr)

	a := 2
	ptr := &a
	fmt.Printf("%T\n", ptr) // *int

	var temp1 *int
	temp2 := new(int)
	fmt.Printf("%T, %T\n", temp1, temp2) // *int, *int
	fmt.Println(temp1, temp2, *temp2)    // <nil> address 0

	// new(int) -> creates a pointer that points to a newly allocated 0 integer value

	x := new(string)
	y := "Aman"
	x = &y
	fmt.Printf("Type: %T, Value: %s\n", x, *x) // *string "Aman"

	p := new(string)
	q := new(bool)
	r := new(map[int]int)
	s := new([]int)
	t := new(*int) // Type = **int
	fmt.Println(p, q, r, s, t) // address address &map[] &[] address 
	fmt.Println(*p, *q, *r, *s, *t) // "" false map[] [] <nil>
}
