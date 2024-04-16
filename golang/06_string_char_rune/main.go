package main

import "fmt"

func main() {
	// 'rune' represents a unicode code point which allows GO to handle character from wide range of languages and symbols
	// It is an alias for 'int32'

	// Ascii is subset of unicode
	// When iterating over a string using 'range', we get 'rune'

	example := "xyZ"

	for _, ch := range example {
		fmt.Printf("Character: %c, Type: %T\n", ch, ch)
	}

	// 'string' is a sequence of bytes. When an index of string is accessed, byte at that position is received
	// It is of type 'uint8'

	for i := 0; i < len(example); i++ {
		fmt.Printf("Character: %c, Type: %T\n", rune(example[i]), example[i])
	}


	// For characters use rune
	var a rune = 'a'
	fmt.Println(string(a))
}
