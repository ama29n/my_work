package main

import (
	"fmt"
	"sync"
	"time"
)

func doAsynchronousTask(ch chan<- int, i int) {
	time.Sleep(time.Second)
	ch <- i
}

func main() {

	n := 5

	chans := make([]chan int, n)

	wg := new(sync.WaitGroup)

	wg.Add(n)

	for i := 0; i < n; i++ {
		chans[i] = make(chan int)
		go func(wg *sync.WaitGroup, ch chan int, i int) {
			defer wg.Done()
			doAsynchronousTask(ch, i)
		}(wg, (chans)[i], i)
	}

	wg.Wait()

	for i := 0; i < n; i++ {
		close(chans[i])
	}

	for i := 0; i < n; i++ {
		ch := <-chans[i]
		fmt.Println(ch)
	}
}
