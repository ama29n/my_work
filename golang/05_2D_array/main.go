package main

import "fmt"

func main() {
	// 2D array can be created using slices
	rows, cols := 3, 4
	matrix := make([][]int, rows)
	for i := 0; i < rows; i++ {
		matrix[i] = make([]int, cols)
	}
	fmt.Println(matrix) // [[0 0 0 0] [0 0 0 0] [0 0 0 0]]
}
