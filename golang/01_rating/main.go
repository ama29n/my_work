package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter Rating")
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)
	rating, err := strconv.ParseInt(input, 10, 64)
	if err != nil {
		panic("Rating is not a number")
	}
	if rating > 0 && rating <= 5 {
		fmt.Print("Rating is: ", rating)
	} else {
		fmt.Print("Invalid Rating")
	}
}
