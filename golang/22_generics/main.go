package main

import "fmt"

type userID int32

type NUM interface {
    int | ~int32 | int64 | float32 | float64
}

// generic function
func add[T NUM](a, b T) T {
    return a + b
}

// generic map
type customMap[T comparable, V int | string] map[T]V

func main() {
    a := userID(2)
    b := userID(3)
    c := add(a, b)
    fmt.Println(c)
    m := make(customMap[int, string])
    m[2] = "2"
    fmt.Println(m)
}
