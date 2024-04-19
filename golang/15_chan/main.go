package main

import (
	"fmt"
	"sync"
)

// chan are used for communication and synchronization between goroutines.
// They allow goroutines to send and receive values to and from each other.

func main() {

	wg := new(sync.WaitGroup)

	ch := make(chan int, 1)

	// ch <- 5
	// fmt.Println(<-ch) -> error

	wg.Add(2)
	go func(wg *sync.WaitGroup, ch <-chan int) {
		defer wg.Done()
		val, isChannelOpen := <-ch
		// val = <- ch // val -> 3
		if isChannelOpen {
			fmt.Println("Channel is close and value is", val)
		} else {
			fmt.Println("Channel is open and value is", val)
		}
	}(wg, ch)

	go func(wg *sync.WaitGroup, ch chan<- int) {
		defer wg.Done()
		ch <- 2
		ch <- 3
		close(ch)
		// If cannel is closed without adding anything, 0 is given out while extracting value
	}(wg, ch)

	wg.Wait()
}
