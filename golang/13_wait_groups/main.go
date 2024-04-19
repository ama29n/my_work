package main

import (
	"fmt"
	"net/http"
	"sync"
)

var wg *sync.WaitGroup

var mut *sync.Mutex

var signals []string

func main() {

	wg = new(sync.WaitGroup)
	mut = new(sync.Mutex)

	websites := []string{"https://google.com", "https://facebook.com", "https://go.dev", "https://github.com"}

	// wg.Add(len(websites) + 1) -> this will get stuck on wg.wait()

	wg.Add(len(websites))

	for _, web := range websites {
		go getStatusCode(web)
	}

	wg.Wait()

	fmt.Println(signals)
}

func getStatusCode(endpoint string) {

	defer wg.Done()

	res, err := http.Get(endpoint)

	if err != nil {
		panic(err)
	}

	fmt.Printf("%d status code for %s\n", res.StatusCode, endpoint)

	mut.Lock()
	signals = append(signals, res.Status)
	mut.Unlock()
}
