package main

import (
	"fmt"
	"sync"
	"time"
)

// A channel is always blocking if it is full

func doAsynchronousTask(ch chan<- int, i int) {
	time.Sleep(time.Second)
	ch <- i
}

func main() {

	var n int = 5

	chans := make([]chan int, n)

	wg := new(sync.WaitGroup)
	mut := new(sync.Mutex)

	wg.Add(2 * n)

	for i := 0; i < n; i++ {
		chans[i] = make(chan int)
		go func(wg *sync.WaitGroup, ch chan int, i int) {
			defer wg.Done()
			doAsynchronousTask(ch, i)
		}(wg, chans[i], i)
	}

	result := []int{}

	for i := 0; i < n; i++ {
		go func(wg *sync.WaitGroup, result *[]int, ch chan int, mut *sync.Mutex) {
			defer wg.Done()
			r := <-ch
			mut.Lock()
			*result = append(*result, r)
			mut.Unlock()
		}(wg, &result, chans[i], mut)
	}

	wg.Wait()

	fmt.Println(result)
}
