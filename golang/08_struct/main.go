package main

import "fmt"

// There are no 'classes' in golang hence no 'inheritance'

type User struct {
	Name   string
	Age    int
	IsMale bool
}

func main() {
	u1 := User{}                // all fields are initialised to zero values
	u2 := User{"Aman", 2, true} //
	u1.Name = "XYZ"             //
	fmt.Println(u1, u2)         // {XYZ 0 false} {Aman 2 true}

	u3 := new(User)        // Creates a pointer to an zero valued instance of User
	fmt.Println(u3)        // & {"" 0 false}
	fmt.Printf("%p\n", u3) // To get address use '%p' format specifier

	// Instances of same struct can be compared only and comparsion happens by value
	u4 := User{"XYZ", 2, true}
	u5 := u4
	fmt.Println(u4 == u5) // true
	u4.Name = "ABC"
	fmt.Println(u4 == u5) // false

	// Detailed Description
	fmt.Printf("%+v", u2) // {Name:Aman Age:2 IsMale:true}
}
