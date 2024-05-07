package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

func main() {
	wg := new(sync.WaitGroup)

	context, cancel := context.WithCancel(context.Background())
	defer cancel()

	generator := func(item string, stream chan interface{}) {
		for {
			select {
			case <-context.Done():
				return
			case stream <- item:
			}
		}
	}

	infiniteApples := make(chan interface{})
	go generator("apple", infiniteApples)

	infiniteOranges := make(chan interface{})
	go generator("orange", infiniteOranges)

	infinitePeaches := make(chan interface{})
	go generator("peach", infinitePeaches)

	wg.Add(1)
	go func1(context, wg, infiniteApples)

	func2 := generic
	func3 := generic

	wg.Add(1)
	go func2(context, wg, infiniteOranges)

	wg.Add(1)
	go func3(context, wg, infinitePeaches)

	wg.Wait()
}

func func1(parentContext context.Context, parentWg *sync.WaitGroup, stream <-chan interface{}) {
	defer parentWg.Done()
	childWg := new(sync.WaitGroup)

	doWork := func(ctx context.Context, childWg *sync.WaitGroup) {
		defer childWg.Done()
		for {
			select {
			case <-ctx.Done():
				return
			case item, ok := <-stream:
				{
					if !ok {
						fmt.Println("channel closed")
						return
					}
					fmt.Println(item)
				}
			}
		}
	}

	childContext, cancel := context.WithTimeout(parentContext, time.Second*3)
	defer cancel()

	for i := 0; i < 3; i++ {
		childWg.Add(1)
		go doWork(childContext, childWg)
	}

	childWg.Wait()
}

func generic(parentContext context.Context, parentWg *sync.WaitGroup, stream <-chan interface{}) {
	defer parentWg.Done()

	for {
		select {
		case <-parentContext.Done():
			return
		case item, ok := <-stream:
			{
				if !ok {
					fmt.Println("channel closed")
					return
				}
				fmt.Println(item)
			}
		}
	}
}
