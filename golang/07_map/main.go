package main

import "fmt"

func main() {
	mp1 := make(map[int]int)
	var mp2 map[int]int
	mp3 := map[int]int{}

	fmt.Println(mp1 == nil, mp2 == nil, mp3 == nil) // false true false

	mp3[2] = 20
	mp3[4] = 12
	fmt.Println(mp3) // map[2:20 4:12]

	// Initialise map
	mp4 := map[int]int{2: 30, 4: 90, 5: 34, 7: 829}
	fmt.Println(mp4)

	// Copy map
	mp5 := map[int]int{10: 2, 12: 4}
	mp6 := make(map[int]int)
	for key, value := range mp5 {
		mp6[key] = value
	}
	
	// 3D map
	mp7 := make(map[int]map[int]int)
	if mp7[2] == nil {
		mp7[2] = make(map[int]int)
	}
	mp7[2][4] = 23
	fmt.Println(mp7)
}
