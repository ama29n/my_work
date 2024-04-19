package main

import (
	"fmt"
	"sync"
)

// check using -> go run --race .

func main() {

	wg := new(sync.WaitGroup)

	mut := new(sync.Mutex)

	results := []int{0}

	wg.Add(3)

	go func(wg *sync.WaitGroup, mut *sync.Mutex) {
		defer wg.Done()
		fmt.Println("One")
		mut.Lock()
		results = append(results, 1)
		mut.Unlock()
	}(wg, mut)

	go func(wg *sync.WaitGroup, mut *sync.Mutex) {
		defer wg.Done()
		fmt.Println("Two")
		mut.Lock()
		results = append(results, 2)
		mut.Unlock()
	}(wg, mut)

	go func(wg *sync.WaitGroup, mut *sync.Mutex) {
		defer wg.Done()
		fmt.Println("Three")
		mut.Lock()
		results = append(results, 3)
		mut.Unlock()
	}(wg, mut)

	wg.Wait()

	fmt.Println(results)
}
