package main

import (
    "fmt"
    "time"
)

func doWork(done <-chan bool) {
    for {
        select {
        case val := <-done:
            {
                fmt.Println(val)
                return
            }
        default:
            {
                fmt.Println("Working")
            }
        }
    }
}

func main() {
    done := make(chan bool)
    go doWork(done)
    time.Sleep(time.Millisecond * 2)
    close(done)
}
